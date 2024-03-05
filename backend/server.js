import express from "express"
import dotenv from "dotenv"

// initialize backend
dotenv.config()
const app = express()

app.listen(process.env.PORT_NUMBER, () => {
    console.log("Welcome to backend", process.env.PORT_NUMBER)
})