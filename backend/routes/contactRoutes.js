const router = require("express").Router();
const Contact = require("../models/contactModel");

router.get("/", async (req, res) => {
  try {
    posts = await Contact.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
