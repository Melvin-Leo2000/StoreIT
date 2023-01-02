const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"], 
    },
    contact: {
      type: String,
      required: [true, "Please add a contact"], 
    },
    email: {
      type: String,
      required: [true, "Please add an email"], 
    },
    collectiondate: {
      type: String,
      required: [true, "Please add a collection date"], 
    },
    collectiontime: {
      type: String,
      required: [true, "Please add a collection time"],
    },
    returndate: {
      type: String,
      required: [true, "Please add a date"], 
    },
    returntime: {
      type: String,
    },
    smallitems: {
      type: String,
      required: [true, "Please add a number"],
    },
    largeitems: {
      type: String,
      required: [true, "Please add a number"],
    },
    hugeitems: {
      type: String,
      required: [true, "Please add a number"],
    },
    duration: {
      type: String,
      required: [true, "Please add a number"],
    },
    residence: {
      type: String,
      required: [true, "Please add a residence"],
    },
    notes: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

//        this is passing in the name 'User' and the userSchema object
module.exports = mongoose.model("users", userSchema);
