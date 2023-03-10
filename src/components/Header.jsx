function Header () {
    return (
        <nav className="brown darken-1">
            <div className="nav-wrapper">
                <span className="brand-logo left">Movies</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/marknik139/movies-omdb-api">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}

export { Header }
