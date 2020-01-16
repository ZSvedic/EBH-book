@REM Go to source foder as links in markdown files are relative from that folder:
pushd source

@REM To define only in one place, define source variable:
set source=front-matter.md chapter1.md chapter2.md chapter3.md chapter4.md chapter5.md chapter6.md chapter7.md chapter8.md bonus-chapter.md back-matter.md

@REM Build HTML:
pandoc -s %source% -o ../output/EBH.html --toc -c ../styling/html-epub-styling.css --lua-filter=../styling/pagebreak.lua --lua-filter=../styling/html-open-links-in-new-tab.lua

@REM Build EPUB:
pandoc -s %source% -o ../output/EBH.epub --toc -c ../styling/html-epub-styling.css --lua-filter=../styling/pagebreak.lua 

@REM Build print PDF:
pandoc -s %source% -o ../output/EBH-print.pdf --toc --columns 55 -H ../styling/pdf-print-latex-options.sty --lua-filter=../styling/pdf-center-images.lua

@REM Build standalone PDF:
pandoc -s %source% -o ../output/EBH-standalone.pdf --toc --columns 55 -H ../styling/pdf-standalone-latex-options.sty --lua-filter=../styling/pdf-center-images.lua

@REM Go back to the original folder:
popd 
