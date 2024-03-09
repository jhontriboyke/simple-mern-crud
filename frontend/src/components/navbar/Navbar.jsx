import { Link } from 'react-router-dom';
import './navbar.scss';
import useAuthContext from '../../hooks/useAuthContext';
import useLogout from '../../hooks/useLogout';

const Navbar = () => {
    const { user, dispatch } = useAuthContext();
    const { logout } = useLogout();
    return (
        <nav className="main-nav">
            <div className="container nav-wrapper">
                <div className="brand-wrapper">
                    <Link to={'/'}>Grandmadie</Link>
                </div>
                <div className="nav-controls-wrapper">
                    {user ? (
                        <div className="nav-links">
                            <Link className="manage-link" to={'/manage'}>
                                Manage Books
                            </Link>
                            <div>
                                <p className="user-info">
                                    Welcome <span>{user.email}</span>
                                </p>
                                <button
                                    className="logout-btn"
                                    onClick={() => logout()}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="nav-links">
                            <Link className="login-btn" to={'/login'}>
                                Masuk
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
