const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

/**POST routes */
router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
