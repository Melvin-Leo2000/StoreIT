const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"], 
    },
    tele: {
      type: String,
      required: [true, "Please add a contact info"],
    },
    msg: {
      type: String,
      required: [true, "Please add a message"], 
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", userSchema);