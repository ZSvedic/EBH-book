function center_image(image)
    if (pandoc.List.includes(image.attr["classes"], 'not-centered')) then
        return nil
    end

    if (image.caption and #image.caption > 0) then
        local notes = {}
        local captionText = pandoc.walk_inline(pandoc.Span(image.caption), {
            Note = function(note)
                table.insert(notes, pandoc.Span(pandoc.utils.blocks_to_inlines(note.content)))
                return pandoc.RawInline('latex', '\\footnotemark{}')
            end
        })

        if (notes and #notes > 0) then
            return {
                pandoc.RawInline('latex', '\\begin{figure}'),
                pandoc.RawInline('latex', '\n\\centering\n'),
                image,
                pandoc.RawInline('latex', '\n\\begin{footnotesize}'),
                captionText,
                pandoc.RawInline('latex', '\n\\end{footnotesize}'),
                pandoc.RawInline('latex', '\n\\end{figure}'),
                pandoc.RawInline('latex', '\n\\footnotetext'),
                table.unpack(notes)
            }
        else
            return {
                pandoc.RawInline('latex', '\\begin{figure}'),
                pandoc.RawInline('latex', '\n\\centering\n'),
                image,
                pandoc.RawInline('latex', '\n\\begin{footnotesize}'),
                captionText,
                pandoc.RawInline('latex', '\n\\end{footnotesize}'),
                pandoc.RawInline('latex', '\n\\end{figure}')
            }
        end
    else
        return {
            pandoc.RawInline('latex', '\\begin{figure}'),
            pandoc.RawInline('latex', '\n\\centering\n'),
            image,
            pandoc.RawInline('latex', '\n\\end{figure}')
        }
    end
end

return { { Image = center_image } }