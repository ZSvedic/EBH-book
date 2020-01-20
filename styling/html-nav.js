(function() {
    var toc, copyright, chapters, footnotes, currentPage;

    function supportsHistoryApi() {
        return !!(window.history && history.pushState);
    }

    function hide(el) {
        el.style.display = "none";
    }

    function show(el) {
        el.style.display = "initial";
    }

    function goTo(hash) {
        if (currentPage) {
            hide(currentPage);
        }

        currentPage = getRootChapter(hash);

        if (currentPage == null) {
            show(toc);
            show(copyright);
            
            window.location.hash = '';
        } else {
            hide(toc);
            hide(copyright);
            show(currentPage);

            if (currentPage.hash !== hash) {
                window.location.hash = '';
                window.location.hash = hash;
            }
        }
    }

    function onTocLinkClick(e) {
        e.preventDefault();
        goTo(e.target.hash);
    }

    function getRootChapter(hash) {
        var chapter = chapters[hash];

        while (chapter && chapter.parentChapter) {
            chapter = chapter.parentChapter;
        }

        return chapter;
    }

    function buildSubChapters(chapter, level) {
        var subs = chapter.querySelectorAll("section.level" + level);
        
        subs.forEach(function(x) {
            x.hash = '#' + x.id;
            x.parentChapter = chapter;
            
            buildSubChapters(x, level + 1);

            chapters[x.hash] = x;
        });
    }

    function init() {
        if (!supportsHistoryApi()) {
            // if the browser doesn't support history api
            // leave the book as it is, a single HTML file
            return;
        }

        var title = document.querySelector("h1.title");
        title.addEventListener('click', function() { goTo(null); });

        var tocButton = document.querySelector("button#toc-button");
        tocButton.addEventListener('click', function() { goTo(null); });

        toc = document.querySelector("#TOC");
        toc.querySelectorAll('a').forEach(function(x) { x.addEventListener('click', onTocLinkClick); });

        copyright = document.querySelector("section#copyright"); 

        footnotes = document.querySelector("section.footnotes"); 
        footnotes.style.display = "none";

        chapters = {};
        document.querySelectorAll("section.level2")
            .forEach(function(x) { 
                x.hash = '#' + x.id;
                x.style.display = "none";

                buildSubChapters(x, 3);

                chapters[x.hash] = x;
            });

        goTo(window.location.hash);
    }

    init();
})()