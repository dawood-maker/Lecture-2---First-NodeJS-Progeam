const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

router.get("/add-home", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-home.ejs"));
});

module.exports = router;
