import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './_base.scss';
import { BookContextProvider } from './context/bookContext.jsx';
import AuthContextProvider from './context/authContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <BookContextProvider>
                    <App />
                </BookContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
