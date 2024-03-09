import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Book from './pages/book/Book';
import ManageBook from './pages/manageBook/ManageBook';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import useAuthContext from './hooks/useAuthContext';

const App = () => {
    const { user } = useAuthContext();

    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={user ? <Home /> : <Navigate to={'/login'} />}
                    />
                    <Route path="/book/:id" element={<Book />} />
                    <Route
                        path="/manage"
                        element={
                            user ? <ManageBook /> : <Navigate to={'/login'} />
                        }
                    />
                    <Route
                        path="/login"
                        element={user ? <Navigate to={'/'} /> : <Login />}
                    />
                    <Route
                        path="/signup"
                        element={user ? <Navigate to={'/'} /> : <Signup />}
                    />
                </Routes>
            </main>
        </>
    );
};

export default App;
