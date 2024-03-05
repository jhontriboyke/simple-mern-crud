import mongoose from "mongoose";
import Book from "../models/book.model.js";

// GET all books
export const getAllBooks = async (req, res) => {
    const books = await Book.find({}).sort({ createdAt: -1 })

    res.status(200).json(books)
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