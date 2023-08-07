(function() {
    // Include table of contents only on the "license" page.
    // This is a workaround for the fact that the book currently "merges" the
    // "Table of Contents" page with the "License" page.
    document.addEventListener('DOMContentLoaded', function() {
        const licenseElement = document.getElementById('license');
        if (licenseElement) {
            // Show the table of contents.
            const frontPageElement = document.getElementById('front-page');
            frontPageElement.style.display = 'block';
            // Disable the previous buttons for the first page (license).
            const prevButtonElements = document.querySelectorAll('.prev-button');
            prevButtonElements.forEach(function(prevButtonElement) {
                prevButtonElement.disabled = true;
            });
            const prevLinkElements = document.querySelectorAll('.prev-link');
            prevLinkElements.forEach(function(prevLinkElement) {
                prevLinkElement.href = '#';
            });

        }

        const aboutTheAuthorElement = document.getElementById('about-the-author');
        if (aboutTheAuthorElement) {
            // Disable the next buttons for the last page (about the author).
            const nextButtonElements = document.querySelectorAll('.next-button');
            nextButtonElements.forEach(function(nextButtonElement) {
                nextButtonElement.disabled = true;
            });
        }

    });
})()
