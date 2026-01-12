// Core module
const path = require("path");

// Express module
const express = require("express");

// Local modules
const userRouter = require("./route/userRouter");
const hostRouter = require("./route/hostRouter");
const rootdir = require("../lecture 10 - airbnb/utils/pathUtils");

const app = express();
const PORT = 8090;

// Body parser middleware
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", userRouter);
app.use("/host", hostRouter);

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile(
    path.join(rootdir, "views", "404.html")
  );
});

// Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
