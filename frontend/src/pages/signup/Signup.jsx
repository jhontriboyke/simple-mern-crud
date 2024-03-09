import { Link } from 'react-router-dom';
import './signup.scss';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, password);
    };

    return (
        <div className="container signup-container">
            <section className="signup-wrapper">
                <h1>Sign Up</h1>
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
            </section>
        </div>
    );
};

export default Signup;
