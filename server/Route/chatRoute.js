const express = require("express")
const { createChat, findChat, getUserChats } = require("../Controller/chatController");
const { route } = require("./userRoute");

const router = express.Router()

router.post("/", createChat);
router.get("/:userId", findChat);
router.get("/find/:firstId/:secondId", getUserChats);

module.exports = router