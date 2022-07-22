@REM Go to source foder as links in markdown files are relative from that folder:
pushd source

@REM To define only in one place, define some variables:
set front=front-matter.md
set content=chapter1.md chapter2.md chapter3.md chapter4.md chapter5.md chapter6.md chapter7.md chapter8.md bonus-chapter.md back-matter.md

@REM Build HTML:
pandoc -s %front% %content% -o ../output/ebh.html --toc --section-divs --lua-filter ../styling/pagebreak.lua --lua-filter ../styling/html-open-links-in-new-tab.lua --lua-filter ../styling/html-lazy-images.lua --template ../styling/html-template.html

@REM Build EPUB:
pandoc -s %front% %content% -o ../output/ebh.epub --toc -c ../styling/epub-styling.css --lua-filter ../styling/pagebreak.lua 

@REM Build print PDF:
pandoc -s %front% -o ../output/ebh-print-front.pdf --columns 55 -H ../styling/pdf-print-latex-options.sty --lua-filter ../styling/pdf-center-images.lua --template ../styling/pdf-print-front-template.tex
pandoc -s %content% -o ../output/ebh-print-content.pdf --columns 55 -H ../styling/pdf-print-latex-options.sty --lua-filter ../styling/pdf-center-images.lua --lua-filter ../styling/pdf-table-size.lua --toc 

pdflatex -job-name=ebh-print -output-directory=../output/ ../styling/pdf-print-merge.tex
del ..\output\ebh-print-front.pdf
del ..\output\ebh-print-content.pdf
del ..\output\ebh-print.aux
del ..\output\ebh-print.log

@REM Build standalone PDF:
pandoc -s %front% -o ../output/ebh-standalone-front.pdf --columns 55 -H ../styling/pdf-standalone-latex-options.sty --lua-filter ../styling/pdf-center-images.lua --template ../styling/pdf-standalone-front-template.tex
pandoc -s %content% -o ../output/ebh-standalone-content.pdf --columns 55 -H ../styling/pdf-standalone-latex-options.sty --lua-filter ../styling/pdf-center-images.lua --lua-filter ../styling/pdf-table-size.lua --toc

pdflatex -job-name=ebh-standalone -output-directory=../output/ ../styling/pdf-standalone-merge.tex
del ..\output\ebh-standalone-front.pdf
del ..\output\ebh-standalone-content.pdf
del ..\output\ebh-standalone.aux
del ..\output\ebh-standalone.log

@REM Go back to the original folder:
popd