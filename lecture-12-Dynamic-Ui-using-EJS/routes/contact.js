const express = require("express");
const path = require("path");
const router = express.Router();

// Temp store for messages
const messages = [];

// GET contact page
router.get("/contact-us", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "contact.html"));
});

// POST contact form
router.post("/contact-us", express.json(), (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Save the message
  messages.push({ name, email, message });
  console.log("Contact Form Submitted:", { name, email, message });

  // Return JSON response for JS
  res.json({ success: true, message: "Form submitted successfully!" });
});

module.exports = router;
