import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="main-nav">
            <div className="container nav-wrapper">
                <div className="brand-wrapper">
                    <Link to={'/'}>Grandmadie</Link>
                </div>
                <div className="nav-controls-wrapper">
                    <Link to={'/manage'}>Manage Books</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
