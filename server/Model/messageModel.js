const mongoose = require("mongoose")

const messgaeSchema = new mongoose.Schema(
    {
        chatId: String,
        senderId: String,
        text: String,

    },
    {
        timestamps: true,
    }
)

const messsageModel = mongoose.model("message", messgaeSchema);

module.exports = messsageModel;