import mongoose from "mongoose";

const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },
    book_desc: {
        type: String,
    },
    cover: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})

export default mongoose.model("Book", bookSchema)