import { useContext, useState } from 'react';
import './form.scss';
import { BookContext } from '../../context/bookContext';
import axios from 'axios';

const Form = () => {
    const { state, dispatch } = useContext(BookContext);
    const [book, setBook] = useState({
        cover: '',
        title: '',
        year: '',
        price: '',
        author: '',
        book_desc: '',
    });

    const handleChange = (e) => {
        if (e.target.name === 'price' || e.target.name === 'year') {
            setBook((prev) => ({
                ...prev,
                [e.target.name]: +e.target.value,
            }));
        } else {
            setBook((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(book).includes('')) {
            alert('Harap isi semua input');
            return;
        }

        try {
            const { data } = await axios.post(
                'http://localhost:4400/api/books/',
                book
            );
            dispatch({ type: 'ADD_BOOK', payload: data });
        } catch (error) {
            console.log(error);
        }

        setBook({
            cover: '',
            title: '',
            year: '',
            price: '',
            author: '',
            book_desc: '',
        });
    };

    console.log(book);

    return (
        <section onSubmit={handleSubmit} className="form">
            <form>
                <div className="form-field">
                    <label htmlFor="cover">Book cover</label>
                    <input
                        type="text"
                        name="cover"
                        id="cover"
                        value={book.cover}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={book.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        value={book.author}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-stack">
                    <div className="form-field">
                        <label htmlFor="year">Year</label>
                        <input
                            type="number"
                            name="year"
                            id="year"
                            value={book.year}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={book.price}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-field">
                    <label htmlFor="book_desc">Book description</label>
                    <textarea
                        name="book_desc"
                        id="book_desc"
                        cols="30"
                        rows="6"
                        value={book.book_desc}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit">Tambah Buku</button>
            </form>
        </section>
    );
};

export default Form;
