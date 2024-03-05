import { createContext, useReducer } from 'react';

export const BookContext = createContext();

const bookReducer = (state, action) => {
    switch (action.type) {
        case value:
            break;

        default:
            break;
    }
};

const books = [];

const BookContextProvider = (children) => {
    const [state, dispatch] = useReducer(bookReducer, books);
    return (
        <BookContext.Provider value={{ state, dispatch }}>
            {children}
        </BookContext.Provider>
    );
};
