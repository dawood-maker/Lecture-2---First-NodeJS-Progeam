const express = require("express");
const path = require("path");

const pagesRouter = require("./routes/pages");
const contactRouter = require("./routes/contact");

const app = express();
const PORT = 2007;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Body parser for form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(pagesRouter);
app.use(contactRouter);

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
