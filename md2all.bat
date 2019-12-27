@REM Go to source foder as links in markdown files are relative from that folder:
pushd source
@REM To define only in one place, define source variable:
set source=front-matter.md chapter1.md chapter2.md chapter3.md chapter4.md chapter5.md chapter6.md chapter7.md chapter8.md bonus-chapter.md back-matter.md
@REM Build HTML and EPUB:
pandoc -s %source% -o ../output/EBH.html --toc -c ../styling/html-epub-styling.css --lua-filter=../styling/pagebreak.lua 
pandoc -s %source% -o ../output/EBH.epub --toc -c ../styling/html-epub-styling.css --lua-filter=../styling/pagebreak.lua 
@REM Build print and standalone PDF:
pandoc -s %source% -o ../output/EBH-print.pdf --toc -H ../styling/PDF-latex-options.sty
@REM Go back to the original folder:
popd 
