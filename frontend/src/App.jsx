import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BookContextProvider } from './context/bookContext';
import Book from './pages/book/Book';
import ManageBook from './pages/manageBook/ManageBook';

const App = () => {
    return (
        <BookContextProvider>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/book/:id" element={<Book />} />
                    <Route path="/manage" element={<ManageBook />} />
                </Routes>
            </main>
        </BookContextProvider>
    );
};

export default App;
