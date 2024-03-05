import express from "express"
import { getAllBooks, postBook } from "../controllers/book.controller.js"

export const router = express.Router()

// GET all books
router.get("/", getAllBooks)

// POST a book
router.post("/", postBook)