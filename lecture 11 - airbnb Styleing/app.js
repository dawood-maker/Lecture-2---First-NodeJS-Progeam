// Core module
const path = require("path");

// Express module
const express = require("express");

// Local modules
const userRouter = require("./route/userRouter");
const hostRouter = require("./route/hostRouter");
const rootdir = require("./utils/pathUtils"); // Corrected path

const app = express();
const PORT = 2535;

// Body parser middleware
app.use(express.urlencoded({ extended: false }));

// ✅ Static folder (Public) - must be before routes
app.use(express.static(path.join(rootdir, "public")));

// Routes
app.use("/", userRouter);
app.use("/host", hostRouter);

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootdir, "views", "404.html"));
});

// Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
