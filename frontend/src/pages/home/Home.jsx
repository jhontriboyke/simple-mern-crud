import { useEffect, useState } from 'react';
import axios from 'axios';
import './home.scss';
import Form from '../../components/form/Form';

const Home = () => {
    const [books, setBooks] = useState([]);
    const fetchBooks = async () => {
        try {
            const { data } = await axios.get(
                'http://localhost:4400/api/books/'
            );
            setBooks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="container flex">
            <section className="homepage">
                <h1>Temukan buku favorit anda di sini</h1>
                <article className="books-collection">
                    {books?.map((book) => (
                        <section className="card">
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
                                    <span className="price">Rp. 49.000,-</span>
                                    <button className="book-btn">Beli</button>
                                </div>
                            </div>
                        </section>
                    ))}
                </article>
            </section>
            <Form />
        </div>
    );
};

export default Home;
