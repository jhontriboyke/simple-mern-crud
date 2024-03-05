import mongoose from "mongoose";
import Book from "../models/book.model.js";

// GET all books
export const getAllBooks = async (req, res) => {
    const books = await Book.find({}).sort({ createdAt: -1 })

    res.status(200).json(books)
}

// GET a single book
export const getBook = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such book" })
    }

    const book = await Book.findById(id)

    if (!book) {
        return res.status(400).json({ error: "No such book" })
    }

    res.status(200).json(book)
}

// POST a book
export const postBook = async (req, res) => {
    const { title, year, author, book_desc } = req.body

    try {
        const book = await Book.create({ title, year, author, book_desc })
        res.status(200).json(book)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// DELETE a book
export const deleteBook = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such book" })
    }

    const book = await Book.findOneAndDelete({ _id: id })

    if (!book) {
        return res.status(400).json({ error: "No such book" })
    }

    res.status(200).json(book)
}

// PATCH a book
export const updateBook = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such book" })
    }

    const book = await Book.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!book) {
        return res.status(400).json({ error: "No such book" })
    }

    res.status(200).json(book)
}