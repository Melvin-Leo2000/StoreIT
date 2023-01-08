const router = require("express").Router();
const User = require("../models/userModel")


router.get("/", async (req, res) => {
    try {
      posts = await User.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;