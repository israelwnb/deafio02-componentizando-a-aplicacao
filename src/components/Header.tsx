interface HeaderProps
{
    selectedGenreTitle: String;
}

export function Header({selectedGenreTitle}: HeaderProps)
{
    return (
        <header>
            <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
        </header>
    );
}