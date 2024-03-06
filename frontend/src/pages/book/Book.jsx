import { useNavigate, useParams } from 'react-router-dom';
import './book.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Book = () => {
    const [book, setBook] = useState();
    const params = useParams();
    const getBook = async (id) => {
        try {
            const { data } = await axios.get(
                'http://localhost:4400/api/books/' + id
            );
            setBook(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBook(params.id);
    }, []);

    console.log(book);

    const navigate = useNavigate();

    if (!book)
        return (
            <section className="container loading-wrapper">
                <div className="loader"></div>
            </section>
        );

    return (
        <>
            <section className="container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    &lt; Back
                </button>
                <div className="book-container">
                    <div className="cover-container">
                        <div className="cover-wrapper">
                            <img src={book.cover} alt={book.title} />
                        </div>
                        <div className="info-wrapper">
                            <button>
                                Rp. {book.price.toLocaleString('id-ID')},-
                            </button>
                        </div>
                    </div>
                    <div className="detail-container">
                        <div className="book-detail-wrapper">
                            <h1 className="title">{book.title}</h1>
                            <h2 className="author">{book.author}</h2>
                            <p className="desc">{book.book_desc}</p>
                            <span className="year">
                                Published in : {book.year}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Book;
