import { useContext, useState } from 'react';
import './bookItem.scss';
import { BookContext } from '../../context/bookContext';
import axios from 'axios';
import useDialog from '../../hooks/useDialog';
import Dialog from '../dialog/Dialog';
import EditBook from '../editBook/EditBook';

const BookItem = (props) => {
    const book = props;
    const { dispatch } = useContext(BookContext);
    const { openDialog, toggleDialog } = useDialog();
    const [isEdit, setIsEdit] = useState(false);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:4400/api/books/' + id);

            dispatch({ type: 'DELETE_BOOK', payload: id });
            toggleDialog();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={`book-item`}>
            {isEdit ? (
                <EditBook {...book} setIsEdit={setIsEdit} />
            ) : (
                <>
                    {openDialog && (
                        <Dialog>
                            <h1 className="dialog-warn">Confirm Delete</h1>
                            <div className="dialog-controls">
                                <button onClick={() => toggleDialog()}>
                                    Cancel
                                </button>
                                <button onClick={() => handleDelete(book._id)}>
                                    Yes
                                </button>
                            </div>
                        </Dialog>
                    )}
                    <div
                        className={`cover-wrapper ${openDialog && 'deletting'}`}
                    >
                        <img src={book.cover} />
                    </div>
                    <div
                        className={`detail-wrapper ${
                            openDialog && 'deletting'
                        }`}
                    >
                        <h2 className="title">{book.title}</h2>
                        <h3 className="author">{book.author}</h3>
                        <p className="detail">
                            <span>Year: {book.year}</span>{' '}
                            <span>
                                Price: Rp. {book.price.toLocaleString('id-ID')}
                                ,-
                            </span>
                        </p>
                        <p className="desc">{book.book_desc}</p>
                        <div className="book-controls">
                            <button onClick={() => setIsEdit(true)}>
                                Edit
                            </button>
                            <button onClick={() => toggleDialog()}>
                                Delete
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default BookItem;
