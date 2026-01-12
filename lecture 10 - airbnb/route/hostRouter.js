//Express module
const express = require("express");
const hostRouter = express.Router();

// Add Home Form GET
hostRouter.get("/host/add-home", (req, res) => {
  res.send(`
    <h1>Register your home here:</h1>
    <form action="/host/add-home" method="POST">
      <input
        type="text"
        name="houseName"
        placeholder="Enter the name for your home"
      />
      <button type="submit">Add Home</button>
    </form>
  `);
});

// POST Handling
hostRouter.post("/host/add-home", (req, res) => {
  console.log(req.body);
  res.send(`
    <h1>Home Registered successfully</h1>
    <a href="/">Go To Home</a>
  `);
});

module.exports = hostRouter;
