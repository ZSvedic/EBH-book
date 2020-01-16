function set_link_targets_to_blank(link)
    link.attr["attributes"]["target"] = "_blank"
    return pandoc.Link(link.content, link.target, link.title, link.attr)
end

return { { Link = set_link_targets_to_blank } }