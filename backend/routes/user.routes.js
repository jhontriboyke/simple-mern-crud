import express from "express"
import { loginUser, signupUser } from "../controllers/user.controller.js"

export const router = express.Router()

// Login
router.post("/login", loginUser)

// Signup
router.post("/signup", signupUser)

