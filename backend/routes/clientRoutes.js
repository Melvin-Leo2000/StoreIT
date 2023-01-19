const router = require("express").Router();
const User = require("../models/userModel");

router.get("/:id", async (req, res) => {
  try {
    const post = await User.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
      try {
        const updatedPost = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/", async (req, res) => {
  try {
    posts = await User.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
