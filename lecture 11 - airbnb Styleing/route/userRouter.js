// Core module
const path = require("path");

// Express module
const express = require("express");
const userRouter = express.Router();

// ✅ CORRECT relative path
const rootdir = require("../utils/pathUtils");

// Home page
userRouter.get("/", (req, res) => {
  res.sendFile(
    path.join(rootdir, "views", "home.html")
  );
});

module.exports = userRouter;
