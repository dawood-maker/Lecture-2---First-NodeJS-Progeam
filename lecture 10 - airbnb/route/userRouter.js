//Express module
const express = require("express");
const userRouter = express.Router();

// Home page
userRouter.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to Airbnb</h1>
    <a href="/host/add-home">Add Home</a>
  `);
});

module.exports = userRouter;
