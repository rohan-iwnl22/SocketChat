const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const userRoute = require("./Route/userRoute")


const app = express();
require("dotenv").config()

app.use(express.json()); // Use express.json() to parse JSON bodies
app.use(cors());

const PORT = process.env.PORT || 5000;
const uri = process.env.URI

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB succesfully connected")
}).catch((error) => { console.log("MongoDB connection failed: ", error.message) })

app.get("/", (req, res) => {
    res.send("Welcome to Chat APP")
})

app.use("/api/users", userRoute)