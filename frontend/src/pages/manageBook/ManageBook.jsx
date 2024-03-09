import { useContext, useEffect } from 'react';
import Form from '../../components/form/Form';
import './manageBook.scss';
import { BookContext } from '../../context/bookContext';
import axios from 'axios';
import BookItem from '../../components/bookItem/BookItem';
import useAuthContext from '../../hooks/useAuthContext';

const ManageBook = () => {
    const { state, dispatch } = useContext(BookContext);
    const books = [...state];
    const { user } = useAuthContext();

    const fetchBooks = async () => {
        try {
            const { data } = await axios.get(
                'http://localhost:4400/api/books/',
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            );
            dispatch({ type: 'GET_BOOKS', payload: data });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, [books]);

    return (
        <section className="container manage-book-container">
            <div className="manage-book-wrapper">
                <div className="book-list-container">
                    {books.map((book) => (
                        <BookItem key={book._id} {...book} />
                    ))}
                </div>
                <Form />
            </div>
        </section>
    );
};

export default ManageBook;
