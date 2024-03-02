const express = require("express")
const { userRegister, loginUser, findUser, getUser } = require("../Controller/userController")

const router = express.Router()

router.post("/register", userRegister)
router.post("/login", loginUser)
router.get("/find/:userId", findUser)
router.get("/", getUser)

module.exports = router;