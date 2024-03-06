import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './home.scss';
import { BookContext } from '../../context/bookContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const { state, dispatch } = useContext(BookContext);
    const fetchBooks = async () => {
        try {
            const { data } = await axios.get(
                'http://localhost:4400/api/books/'
            );
            dispatch({ type: 'GET_BOOKS', payload: data });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    console.log(state);

    return (
        <div className="container flex">
            <section className="homepage">
                <h1>Temukan buku favorit anda di sini</h1>
                <article className="books-collection">
                    {state?.map((book) => (
                        <Link to={'/book/' + book._id}>
                            <section key={book._id} className="card">
                                <div className="card-header">
                                    <img
                                        className="cover"
                                        src={book.cover}
                                        alt=""
                                    />
                                </div>
                                <div className="card-content book-desc">
                                    <h3 className="author">{book.author}</h3>
                                    <h2 className="title">{book.title}</h2>
                                    <p className="desc truncate">
                                        {book.book_desc}
                                    </p>
                                    <div className="book-controls">
                                        <span className="price">
                                            Rp.{' '}
                                            {book.price.toLocaleString('id-ID')}
                                            ,-
                                        </span>
                                        <button className="book-btn">
                                            Beli
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </Link>
                    ))}
                </article>
            </section>
        </div>
    );
};

export default Home;
