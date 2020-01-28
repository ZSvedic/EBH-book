(function() {
    var frontPage, copyright, chapters, sections, footnotes, currentPage, prevButtons, nextButtons;

    function hide(el) {
        el.style.display = "none";
    }

    function show(el) {
        el.style.display = null;
    }

    function goTo(hash) {
        if (currentPage) {
            hide(currentPage);
        }

        currentPage = getRootChapter(hash);

        if (currentPage == null) {
            show(frontPage);
            show(copyright);

            window.location.hash = '';
        } else {
            hide(frontPage);
            hide(copyright);
            show(currentPage);

            window.location.hash = hash;
        }

        if (currentPage == chapters[chapters.length - 1]) {
            show(footnotes);
        } else {
            hide(footnotes);
        }

        prevButtons.forEach(function(el) { el.disabled = currentPage == null; });
        nextButtons.forEach(function(el) { el.disabled = currentPage == chapters[chapters.length - 1]; });
    }

    function goToPrevious() {
        if(!currentPage) {
            return;
        } else {
            var index = chapters.findIndex(function(x) { return x.hash == currentPage.hash });
            index--;

            window.location.hash = chapters[index] ? chapters[index].hash : '';
        }
    }

    function goToNext() {
        var index = currentPage ? chapters.findIndex(function(x) { return x.hash == currentPage.hash }) : -1;
        index++;

        window.location.hash = chapters[index] ? chapters[index].hash : '';
    }

    function getRootChapter(hash) {
        var section = sections.find(function (x) { return x.hash === hash; });
        while (section && section.parentChapter) { section = section.parentChapter;}

        return section;
    }

    function buildSubChapters(chapter, level) {
        var subs = chapter.querySelectorAll("section.level" + level);
        
        subs.forEach(function(x) {
            x.hash = '#' + x.id;
            x.parentChapter = chapter;
            
            buildSubChapters(x, level + 1);

            sections.push(x);
        });
    }

    function setupShareButtons() {
        var shareButtonsContainer = document.getElementById("share-buttons");
        show(shareButtonsContainer);

        var shareButtons = shareButtonsContainer.getElementsByTagName("a");
        for(var i = 0; i < shareButtons.length; i++) {
            var button = shareButtons[i];

            button.href = button.dataset.hrefTemplate
                .replace("{url}", encodeURIComponent(window.location.href))
                .replace("{title}", "Evidence-Based Hiring")
        }
    }

    function init() {
        if (typeof (document.querySelector) !== "function") {
            // if the browser doesn't the apis we need
            // keep the book in a single HTML page
            return;
        }

        setupShareButtons();

        var title = document.querySelector("h1.title");
        title.addEventListener('click', function() { goTo(null); });

        var tocButton = document.querySelector("button#toc-button");
        tocButton.addEventListener('click', function() { goTo(null); });

        frontPage = document.querySelector("#front-page");

        copyright = document.querySelector("section#copyright"); 

        sections = [];
        chapters = [];
        document.querySelectorAll("section.level2")
            .forEach(function(x) { 
                x.hash = '#' + x.id;
                x.style.display = "none";

                buildSubChapters(x, 3);

                sections.push(x);
                chapters.push(x);
            });

        footnotes = document.querySelector("section.footnotes"); 
        footnotes.style.display = "none";

        prevButtons = document.querySelectorAll(".prev-button");
        prevButtons.forEach(function(el) { el.addEventListener('click', goToPrevious); });

        nextButtons = document.querySelectorAll(".next-button");
        nextButtons.forEach(function(el) { el.addEventListener('click', goToNext); });

        goTo(window.location.hash);
        window.addEventListener('hashchange', function() { 
            goTo(window.location.hash);
            setupShareButtons();

            var id = window.location.hash ? window.location.hash.substring(1) : null
            var element = id ? document.getElementById(id) : null;
            window.scroll({ top: element ? element.offsetTop : 0, left: 0 });
        });
    }

    init();
})()