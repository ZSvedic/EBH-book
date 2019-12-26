# Evidence-Based Hiring book
This repo contains source and build scripts for Evidence-Based Hiring book ([Amazon](https://www.amazon.com/Evidence-Based-Hiring-Why-Broken-Data-ebook/dp/B07FRH43N7), [GoodReads](https://www.goodreads.com/book/show/40904662-evidence-based-hiring)). 

The book is in [Pandoc’s Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown), written using [VSCode](https://code.visualstudio.com/). To build HTML, EPUB and PDF, you will need [Pandoc converter](https://pandoc.org/). Once you have pandoc, run "md2all.bat". That will calls pandoc from command line to build each of the output formats. File, "html-epub-styling.css" is used for styling HTML and EPUB (EPUB format is a collection of HTML files), while "pagebreak.lua" is used to add page breaks in post-processing.

This book is licensed under [CC BY-ND 4.0 license](https://creativecommons.org/licenses/by-nd/4.0/legalcode).

 