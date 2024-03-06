import { createContext, useReducer } from 'react';

export const BookContext = createContext();

const bookReducer = (state, action) => {
    switch (action.type) {
        case 'GET_BOOKS': {
            return action.payload;
        }
        case 'ADD_BOOK': {
            return [action.payload, ...state];
        }
        case 'DELETE_BOOK': {
            return state.filter((book) => book._id !== action.payload);
        }
        case 'UPDATE_BOOK': {
            return state.map((book) => {
                if (book._id === action.payload.id) {
                    return { ...book, ...action.payload.data };
                } else {
                    return book;
                }
            });
        }
        default:
            break;
    }
};

const books = [];

export const BookContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(bookReducer, books);
    return (
        <BookContext.Provider value={{ state, dispatch }}>
            {children}
        </BookContext.Provider>
    );
};
