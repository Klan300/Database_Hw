const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    count : Number,
    word : String,
  },
  {
    versionKey: false,
    unique: true,
  }
);

const userModel = mongoose.model("userId", userSchema);

module.exports = userModel;