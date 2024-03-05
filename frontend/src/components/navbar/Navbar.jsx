import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="main-nav">
            <div className="container nav-wrapper">
                <div className="brand-wrapper">
                    <span>Grandmadie</span>
                </div>
                <div className="nav-controls-wrapper">
                    <a href="#">Tambah Buku</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
