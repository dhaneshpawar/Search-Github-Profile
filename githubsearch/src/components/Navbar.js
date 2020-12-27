const Navbar = () => {
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Github Search !</a>
                <ul className="right">
                    <li><a href="/">Home / Search</a></li>
                    <li><a href="/userlist">Saved users List</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar