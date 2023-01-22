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
  const collectiondate = req.query.collectiondate;
  const returndate = req.query.returndate;
  const residence = req.query.residence;
  try {

    let posts;
    if (collectiondate){
      posts = await User.find({collectiondate: collectiondate})
    } else if (returndate){  
      posts = await User.find({returndate: returndate});
    } else if (residence){
      posts = await User.find({residence : residence});
    } else {
      posts = await User.find();
    }
    res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
