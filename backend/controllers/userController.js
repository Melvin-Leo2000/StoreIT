//this will handle all the try catch
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// @description Register a new user
// @route       /users
// @access      Public
const registerUser = asyncHandler(async (req, res) => {
  //in req.body is where the data is going to be stored
  console.log(req.body); //need to send the body parser middleware (else it will be undefined)

  //destructure from the req.body
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields"); //we can create a custom error handler in a middleware
  }

  //if the name email and password is there
  //Find if user already exists
  //In the user model, findOne is finding on document. We can say it is find by email
  const userExists = await User.findOne({ email: email });

  //if the user exist
  if (userExists) {
    res.status(400); //400 is a client error
    throw new Error("User already exists");
  }

  // Hash the password
  //note that these functions returns promises thats why we are using await
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user
  const user = await User.create({
    //this will be stored in the User model
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    //this is to store it as a json file
    //we want to return a token
    res.status(201).json({
      //use _id as that is how mongoDB stores their id
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id), //sign a token, pass in user.id
    });
  } else {
    res.status(400);
    throw new error("Invalid user data");
  }
});
/**
 * @description Login a user
 * @route       /users/login
 * @access      Public
 */

const loginUser = asyncHandler(async (req, res) => {
  //get the email and password from the body we send
  const { email, password } = req.body;
  //from the user model we findOne
  const user = await User.findOne({ email });
  //if the user is found, Check user and passwords match
  //compare the plain text password with the password hash
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      //make the routes protected. So you only can access the routes if u have the token
      token: generateToken(user._id), //sign a token, pass in user.id
    });
  } else {
    //this would be unauthorised
    res.status(401);
    throw new Error("Invalid credentials");
  }

  // res.send('Login Route')
});
/**
 * @desccription Get current user
 * @route        /users/me
 * @access       Private
 */

const getMe = asyncHandler(async (req, res) => {
  //send back
  const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
  };
  res.status(200).json(user);
}); //remember that after u create the function, you have to export it

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  }); //pass in the object with the id
};

//once you export, remember to bring it in to the userRoutes file
module.exports = {
  registerUser,
  loginUser,
  getMe,
};
