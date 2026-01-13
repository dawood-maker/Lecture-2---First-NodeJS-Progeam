const express = require("express");
const path = require("path");
const rootdir = require("../utils/pathUtils");

const router = express.Router();

// GET → show add-home form
router.get("/add-home", (req, res) => {
  res.sendFile(path.join(rootdir, "views", "add-home.html"));
});

// POST → handle form submission
router.post("/add-home", (req, res) => {
  console.log(req.body.houseName);
  res.sendFile(path.join(rootdir, "views", "home-added.html"));
});

module.exports = router;
