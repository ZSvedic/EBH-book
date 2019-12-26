pandoc -s EBH.md -o out-EBH.html --toc -c html-epub-styling.css --lua-filter=pagebreak.lua 
pandoc -s EBH.md -o out-EBH.epub --toc -c html-epub-styling.css --lua-filter=pagebreak.lua 
pandoc -s EBH.md -o out-EBH.pdf --toc -H PDF-latex-options.sty
