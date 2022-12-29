const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"], // Customer name
    },
    date: {
      type: String,
      required: [true, "Please add a date"], // Customer date
    },
    email: {
      type: String,
      required: [true, "Please add an email"], // Customer nus email
    },
    number: {
      type: String,
      required: [true, "Please add a number"], // customer number
    },
    smallboxes: {
      type: Number,
      required: [true, "Please add a number"],
    },
    largeboxes: {
      type: Number,
      required: [true, "Please add a number"],
    },
    oddboxes: {
      type: Number,
      required: [true, "Please add a number"],
    },
    residence: {
      type: String,
      required: [true, "Please add a residence"],
    },
  },
  {
    timestamps: true,
  }
);

//        this is passing in the name 'User' and the userSchema object
module.exports = mongoose.model("users", userSchema);
