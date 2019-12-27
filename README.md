# Evidence-Based Hiring book
This repo contains source and build scripts for Evidence-Based Hiring book ([Amazon](https://www.amazon.com/Evidence-Based-Hiring-Why-Broken-Data-ebook/dp/B07FRH43N7), [GoodReads](https://www.goodreads.com/book/show/40904662-evidence-based-hiring)). 

The book is in [Pandoc’s Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown), written using [VSCode](https://code.visualstudio.com/). 

![](../images/EBH-cover-image-small.jpg)

## Requirements

* To build HTML, EPUB and PDF, you will need [Pandoc converter](https://pandoc.org/). 
* Once you have pandoc, run "md2all.bat" on Windows command line to build everything. If you are on Linux, try using "wine cmd.exe /c md2all.bat" to [run Windows batch file](https://www.linux.org/threads/running-windows-batch-files-on-linux.11205/).

## Explanation

"md2all.bat" calls pandoc from command line to build each of the output formats. Source markdown files are in the "source" folder. In "styling" folder are the following files:
* "html-epub-styling.css" is for styling HTML and EPUB (EPUB format is a collection of HTML files).
* "pagebreak.lua" is used to add page breaks in post-processing.
* "PDF-latex-options.sty" is for LaTeX directives for PDF generation.

## License

This book is licensed under [CC BY-ND 4.0 license](https://creativecommons.org/licenses/by-nd/4.0/legalcode).

 
