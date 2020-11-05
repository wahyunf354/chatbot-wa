const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  body: String,
  timeStamp: {
    type: Date,
    default: Date.now,
  },
  sender: String,
  chatId: String,
  imgProfil: String,
});

module.exports = mongoose.model("Todo", todoSchema);
