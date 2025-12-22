# Evidence-Based Hiring book
This repo contains source and build scripts for Evidence-Based Hiring book ([GoodReads](https://www.goodreads.com/book/show/40904662-evidence-based-hiring)). 

The book is in [Pandoc’s Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown), written using [VSCode](https://code.visualstudio.com/). 

![](images/ebh-cover-image-extra-small.jpg)

## Requirements

* To build HTML, EPUB and PDF, you will need [Pandoc converter](https://pandoc.org/). 
* You'll also need MiKTeX (a LaTeX processor for Windows).
   * Download latest version from https://miktex.org/download.
   * During installation allow MiKTeX to download missing packages automatically.
   * After installation open the MiKTeX console, install the "cm-super" package via the package manager and then run "Tasks -> Refresh file name database" and "Tasks -> Update font map files".
   * Open the MiKTeX console in admin mode (you can do it from within the MiKTeX console by using the option under the Overview tab). When in admin mode, repeat the step above.
* Once you have everything installed, run "md2all.bat" on Windows command line to build everything. If you are on Linux, try using "wine cmd.exe /c md2all.bat" to [run Windows batch file](https://www.linux.org/threads/running-windows-batch-files-on-linux.11205/).

## Explanation

"md2all.bat" calls pandoc from command line to build each of the output formats. Source markdown files are in the "source" folder. In "styling" folder are the following files:
* "epub-styling.css" is for styling EPUB (EPUB format is a collection of HTML files).
* "html-styling.css", "html-template.html", "html-nav.js" and "html-open-links-in-new-tab.lua" are all used to generate the HTML version.
* "pagebreak.lua" is used to improve page breaks in HTML and EPUB versions.
* "pdf-table-size.lua" and "pdf-center-images.lua" are used to improve tables and images in PDF versions.
* Other *.sty and *.tex files are used to generate the PDF versions (printed and digital).

## License

This book is licensed under [CC BY-ND 4.0 license](https://creativecommons.org/licenses/by-nd/4.0/legalcode).

 
