function lazyload_images(img)
    img.attr["attributes"]["loading"] = "lazy"
    return pandoc.Image(img.caption, img.src, img.title, img.attr)
end

return { { Image = lazyload_images } }