import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { router as bookRoutes } from "./routes/book.routes.js"

// initialize backend
dotenv.config()
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// define routes
app.use("/api/books", bookRoutes)

// initialize db - mongoDB
const db = mongoose
try {
    await db.connect(process.env.MONGO_URI)
    app.listen(process.env.PORT_NUMBER, () => {
        console.log("Backend server is up and connected to mongoDB on port", process.env.PORT_NUMBER)
    })
} catch (error) {
    console.log(error)
}

