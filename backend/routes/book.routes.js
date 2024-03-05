import express from "express"
import { deleteBook, getAllBooks, getBook, postBook, updateBook } from "../controllers/book.controller.js"

export const router = express.Router()

// GET all books
router.get("/", getAllBooks)

// GET a single book
router.get("/:id", getBook)

// POST a book
router.post("/", postBook)

// DELETE a book
router.delete("/:id", deleteBook)

// PATCH a book
router.patch("/:id", updateBook)