import './form.scss';

const Form = () => {
    return (
        <section className="form">
            <form>
                <div className="form-field">
                    <label htmlFor="cover">Book cover</label>
                    <input type="text" name="cover" id="cover" />
                </div>
                <div className="form-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div className="form-field">
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="author" />
                </div>
                <div className="form-stack">
                    <div className="form-field">
                        <label htmlFor="year">Year</label>
                        <input type="number" name="year" id="year" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" id="price" />
                    </div>
                </div>
                <div className="form-field">
                    <label htmlFor="book_desc">Book description</label>
                    <textarea
                        name="book_desc"
                        id="book_desc"
                        cols="30"
                        rows="6"
                    ></textarea>
                </div>
                <button type="submit">Tambah Buku</button>
            </form>
        </section>
    );
};

export default Form;
