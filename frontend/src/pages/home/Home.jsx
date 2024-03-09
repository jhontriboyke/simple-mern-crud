import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './home.scss';
import { BookContext } from '../../context/bookContext';
import { Link } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';

const Home = () => {
    const { state, dispatch } = useContext(BookContext);
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
        user && fetchBooks();
    }, []);

    return (
        <div className="container flex">
            <section className="homepage">
                {user ? (
                    <>
                        <h1>Temukan buku favorit anda di sini</h1>
                        <article className="books-collection">
                            {state?.map((book) => (
                                <Link key={book._id} to={'/book/' + book._id}>
                                    <section className="card">
                                        <div className="card-header">
                                            <img
                                                className="cover"
                                                src={book.cover}
                                                alt=""
                                            />
                                        </div>
                                        <div className="card-content book-desc">
                                            <h3 className="author">
                                                {book.author}
                                            </h3>
                                            <div className="book-info">
                                                <h2 className="title">
                                                    {book.title}
                                                </h2>
                                                <p className="desc truncate">
                                                    {book.book_desc}
                                                </p>
                                            </div>
                                            <div className="book-controls">
                                                <span className="price">
                                                    Rp.{' '}
                                                    {book.price.toLocaleString(
                                                        'id-ID'
                                                    )}
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
                    </>
                ) : (
                    <p>
                        Silahkan <Link to={'/login'}>login</Link> terlebih
                        dahulu
                    </p>
                )}
            </section>
        </div>
    );
};

export default Home;
