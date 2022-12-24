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
      unique: true,
    },
    password: {
      type: String,
      minLength: 8,
      required: [true, "Please add a password"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//        this is passing in the name 'User' and the userSchema object
module.exports = mongoose.model("User", userSchema);
