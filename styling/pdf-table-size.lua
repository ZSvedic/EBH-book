function size_table(table)
    return {
        pandoc.RawBlock('latex', '\\begin{tiny}'),
        table,
        pandoc.RawBlock('latex', '\\end{tiny}'),
    }
end

return { { Table = size_table } }