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

module.exports = router;
