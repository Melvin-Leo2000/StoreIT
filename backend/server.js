//bring in express
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");

//this is from the env file
const PORT = process.env.PORT || 3000;
//get the connectDB function
const connectDB = require("./configs/db");
//bring in path from node js
const path = require("path");

//Connect to MongoDB databse
connectDB();

//initialise the app variable from express
const app = express();

//allow the server to run on port 3000 for us to use axios
app.use(cors());

/**MIDDLEWARE */
//this is the middleware to have the body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**ROUTES */
//to use the route
//the end point is /users
app.use(require("./routes/userRoutes"));

//SERVE FRONTEND
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(__dirname, "../", "frontend", "build", "index.html")
  );
} else {
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to StoreIT" });
  });
}

//listen to a specific port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
