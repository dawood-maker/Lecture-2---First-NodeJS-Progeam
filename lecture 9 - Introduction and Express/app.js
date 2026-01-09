// External Modules
const express = require("express");

const app = express();

/**
 * Jab user:
 * http://localhost:9875/submit-details
 */
app.get("/submit-details", (req, res) => {
  console.log("Submit Details Route", req.url, req.method);
  res.send("<p><h1>Came from secound Middelware</h1></p>");
});

/**
 * Jab user:
 * http://localhost:9875/
 */
app.get("/", (req, res) => {
  console.log("Home Route", req.url, req.method);
  res.send("<p><h2>Came from first Middelware</h2></p>");
});

const PORT = 9875;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
