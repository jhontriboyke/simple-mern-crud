import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import { router as bookRoutes } from "./routes/book.routes.js"
import { router as userRoutes } from "./routes/user.routes.js"

// initialize backend
dotenv.config()
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// define routes
app.use("/api/books", bookRoutes)
app.use("/api/user", userRoutes)

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

