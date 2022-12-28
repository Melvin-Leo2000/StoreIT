const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"], //return as an array with the first value is true and the message
    },
    email: {
      type: String,
      required: [true, "Please add an email"], //return as an array with the first value is true and the message
      unique: false,
    },
    number: {
      type: String,
      required: [true, "Please add a number"],
    },
  },
  {
    timestamps: true,
  }
);

//        this is passing in the name 'User' and the userSchema object
module.exports = mongoose.model("users", userSchema);
