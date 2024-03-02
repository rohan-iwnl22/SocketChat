const userModel = require("../Model/userModel")
const bcrypt = require("bcrypt")
const validator = require("validator")
const jwt = require("jsonwebtoken")
const { json } = require("express")

const createToken = (_id) => {
    const jwtkey = process.env.SECRET_KEY;

    return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" })

}

const userRegister = async (req, res) => {

    try {

        const { name, email, password } = req.body
        let user = await userModel.findOne({ email })
        if (user) return res.status(400).json("User already exists")
        if (!name || !email || !password) return res.status(400).json("Fields cannot be empty")
        if (!validator.isEmail(email)) return res.status(400).json("Email should be valid")
        if (!validator.isStrongPassword(password)) return res.status(400).json("Please enter a strong password")

        user = new userModel({ name, email, password })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt)

        user.save()
        const token = createToken(user._id)

        res.status(200).json({ id: user._id, name: user.name, email: user.email, token })
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }

}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        let user = await userModel.findOne({ email })
        if (!user) return res.status(400).json("Invalid email or password...")
        const isValidPassword = await bcrypt.compare(password, user.password)

        if (!isValidPassword) return res.status(400).json("Invalid email or password...")
        const token = createToken(user._id)

        return res.status(200).json({ id: user._id, name: user.name, email, token })
    } catch (error) {
        console.log(error);
        res.status(500).json(error)

    }
}

const findUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await userModel.findById(userId)

        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const getUser = async (req, res) => {
    try {
        const users = await userModel.find()
        if (!users) return res.status(400).json("User not found")
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports = { userRegister, loginUser, findUser, getUser }