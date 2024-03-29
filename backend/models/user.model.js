import mongoose from "mongoose"
import bcrypt from "bcrypt"
import validator from "validator"

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

// static login method
userSchema.statics.login = async function (email, password) {

    // validate the data
    if (!email || !password) {
        throw Error("All field must be filled")
    }

    // find user
    const user = await this.findOne({ email })

    if (!user) {
        throw Error("Incorrect email or password")
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error("Incorrect email or password")
    }

    return user
}

// static signup method
userSchema.statics.signup = async function (email, password) {

    // validate the data
    if (!email || !password) {
        throw Error("All field must be filled")
    }

    // check email
    if (!validator.isEmail(email)) {
        throw Error("Email is not valid")
    }

    // find user
    const exists = await this.findOne({ email })

    if (exists) {
        throw Error("Email already used")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}

export default mongoose.model("User", userSchema)