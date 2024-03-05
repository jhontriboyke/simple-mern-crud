import mongoose from "mongoose";

const Schema = mongoose.Schema

const bookSchema = new Schema({
    cover: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    book_desc: {
        type: String,
    },
}, {
    timestamps: true
})

export default mongoose.model("Book", bookSchema)