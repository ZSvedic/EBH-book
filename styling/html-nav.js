(function () {
  document.addEventListener("DOMContentLoaded", function () {
    setupTableOfContents();
    setupShareButtons();
    fixTables();

    // Surrounds tables with a div to allow for horizontal scrolling.
    function fixTables() {
      const tableElements = document.querySelectorAll("table");
      tableElements.forEach(function (tableElement) {
        const wrapperElement = document.createElement("div");
        wrapperElement.className = "table-wrapper";
        tableElement.parentNode.insertBefore(wrapperElement, tableElement);
        wrapperElement.appendChild(tableElement);
      });
    }

    /**
     * This function sets up share buttons for social media sharing.
     * It retrieves a container element with the ID 'share-buttons' and shows it.
     * Then, it processes each anchor element within the container, replacing their 'href' attributes with customized sharing URLs.
     * The URLs are created by replacing placeholders in the 'data-hrefTemplate' attribute of each anchor element.
     * The placeholders '{url}' and '{title}' are replaced with the encoded current page URL and the title 'Evidence-Based Hiring', respectively.
     */
    function setupShareButtons() {
      var shareButtonsContainer = document.getElementById("share-buttons");

      var shareButtons = shareButtonsContainer.getElementsByTagName("a");
      for (var i = 0; i < shareButtons.length; i++) {
        var button = shareButtons[i];

        button.href = button.dataset.hrefTemplate
          .replace("{url}", encodeURIComponent(window.location.href))
          .replace("{title}", "Evidence-Based Hiring");
      }
    }

    // Include table of contents only on the "license" page.
    // This is a workaround for the fact that the book currently "merges" the
    // "Table of Contents" page with the "License" page.
    function setupTableOfContents() {
      const licenseElement = document.getElementById("license");
      if (licenseElement) {
        // Show the table of contents.
        const frontPageElement = document.getElementById("front-page");
        frontPageElement.style.display = "block";
        // Disable the previous buttons for the first page (license).
        const prevButtonElements = document.querySelectorAll(".prev-button");
        prevButtonElements.forEach(function (prevButtonElement) {
          prevButtonElement.disabled = true;
        });
        const prevLinkElements = document.querySelectorAll(".prev-link");
        prevLinkElements.forEach(function (prevLinkElement) {
          prevLinkElement.href = "#";
        });
      }

      const aboutTheAuthorElement = document.getElementById("about-the-author");
      if (aboutTheAuthorElement) {
        // Disable the next buttons for the last page (about the author).
        const nextButtonElements = document.querySelectorAll(".next-button");
        nextButtonElements.forEach(function (nextButtonElement) {
          nextButtonElement.disabled = true;
        });
      }
    }
  });
})();
