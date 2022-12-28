const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"], // Customer name
    },
    email: {
      type: String,
      required: [true, "Please add an email"], // Customer nus email
      unique: false,
    },
    number: { 
      type: String,
      required: [true, "Please add a number"], // customer number 
    },
  },
  {
    timestamps: true,
  }
);

//        this is passing in the name 'User' and the userSchema object
module.exports = mongoose.model("users", userSchema);
