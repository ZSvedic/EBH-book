function center_image(image)
    if (pandoc.List.includes(image.attr["classes"], 'not-centered')) then
        return nil
    end

    local notes = {}
    local captionText = pandoc.walk_inline(pandoc.Span(image.caption), {
        Note = function(note)
            table.insert(notes, pandoc.Span(pandoc.utils.blocks_to_inlines(note.content)))
            return pandoc.RawInline('latex', '\\footnotemark{}')
        end
    })

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
end

return { { Image = center_image } }