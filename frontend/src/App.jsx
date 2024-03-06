import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BookContextProvider } from './context/bookContext';

const App = () => {
    return (
        <BookContextProvider>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </BookContextProvider>
    );
};

export default App;
