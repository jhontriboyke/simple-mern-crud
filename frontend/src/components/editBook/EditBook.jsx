import { useContext, useState } from 'react';
import './editBook.scss';
import axios from 'axios';
import { BookContext } from '../../context/bookContext';
import useDialog from '../../hooks/useDialog';
import Dialog from '../dialog/Dialog';

const EditBook = (props) => {
    const book = props;
    const [newBook, setNewBook] = useState({
        author: book.author,
        book_desc: book.book_desc,
        cover: book.cover,
        price: book.price,
        title: book.title,
        year: book.year,
    });
    const { dispatch } = useContext(BookContext);
    const { openDialog, toggleDialog } = useDialog();

    const handleChange = (e) => {
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e, id) => {
        e.preventDefault();
        try {
            const { data } = await axios.patch(
                'http://localhost:4400/api/books/' + id,
                newBook
            );
            dispatch({
                type: 'UPDATE_BOOK',
                payload: { id: id, data: data },
            });
            props.setIsEdit(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            className={`edit-form`}
            onSubmit={(e) => handleSubmit(e, book._id)}
        >
            {openDialog && (
                <Dialog>
                    <h1 className="dialog-edit">Confirm Edit</h1>
                    <div className="dialog-controls">
                        <button onClick={() => toggleDialog()}>Cancel</button>
                        <button type="submit">Yes</button>
                    </div>
                </Dialog>
            )}
            <div className="cover-wrapper">
                <img src={newBook.cover} alt={newBook.title} />
                <textarea
                    name="cover"
                    id="cover"
                    value={newBook.cover}
                    onChange={handleChange}
                    rows="3"
                ></textarea>
            </div>
            <div className="detail-wrapper">
                <div className="form-field">
                    <label htmlFor="title">New Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={newBook.title}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-stack">
                    <div className="form-field">
                        <label htmlFor="author">New Author</label>
                        <input
                            type="text"
                            name="author"
                            id="author"
                            value={newBook.author}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="year">Year</label>
                        <input
                            type="number"
                            name="year"
                            id="year"
                            value={newBook.year}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={newBook.price}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="title">New Desc</label>

                    <textarea
                        name="book_desc"
                        id="book_desc"
                        cols="30"
                        rows="13"
                        value={newBook.book_desc}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="form-controls">
                    <button onClick={() => props.setIsEdit((prev) => !prev)}>
                        Cancel
                    </button>
                    <button type="button" onClick={() => toggleDialog()}>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EditBook;
