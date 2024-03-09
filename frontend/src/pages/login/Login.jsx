import { Link } from 'react-router-dom';
import './login.scss';
import useLogin from '../../hooks/useLogin';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password);
    };

    return (
        <div className="container login-container">
            <section className="login-wrapper">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="submit-btn"
                    >
                        Sign Up
                    </button>
                </form>
                {error && <p>{error}</p>}
                <div className="signup-link">
                    <Link to={'/signup'}>Daftar</Link>
                </div>
            </section>
        </div>
    );
};

export default Login;
