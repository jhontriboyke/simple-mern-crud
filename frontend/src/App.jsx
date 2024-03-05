import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

const App = () => {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </>
    );
};

export default App;
