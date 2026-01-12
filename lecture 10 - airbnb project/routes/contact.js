const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

router.post("/contact-us", (req, res) => {
  console.log("Contact Form Data:", req.body); // body parse & log

  res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = router;
