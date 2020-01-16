function center_image(image)
    if (pandoc.List.includes(image.attr["classes"], 'not-centered')) then
        return nil
    end

    return {
        pandoc.RawInline('latex', '\\begin{center}'),
        image,
        pandoc.RawInline('latex', '\\end{center}'),
    }
end

return { { Image = center_image } }