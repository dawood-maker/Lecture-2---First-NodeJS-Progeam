// Core module
const path = require("path");

// Express module
const express = require("express");
const hostRouter = express.Router();

// ✅ CORRECT relative path
const rootdir = require("../utils/pathUtils");

// GET → show form page
hostRouter.get("/add-home", (req, res) => {
  res.sendFile(
    path.join(rootdir, "views", "add-home.html")
  );
});

// POST → handle form
hostRouter.post("/add-home", (req, res) => {
  console.log(req.body.houseName);

  res.sendFile(
    path.join(rootdir, "views", "home-added.html")
  );
});

module.exports = hostRouter;
