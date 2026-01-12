// // Core module
// const path = require("path");

// // Express module
// const express = require("express");
// const userRouter = express.Router();

// // Home page
// userRouter.get("/", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "../", "views", "home.html")
//   );
// });

// module.exports = userRouter;




// Core module
const path = require("path");

// Express module
const express = require("express");
const userRouter = express.Router();

// Home page
userRouter.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../views", "home.html")
  );
});

module.exports = userRouter;
