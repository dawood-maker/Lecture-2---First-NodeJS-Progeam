// // Core module
// const path = require("path");

// // Express module
// const express = require("express");
// const hostRouter = express.Router();

// // GET → show form page
// hostRouter.get("/add-home", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "../", "views", "add-home.html")
//   );
// });

// // POST → handle form
// hostRouter.post("/add-home", (req, res) => {
//   console.log(req.body.houseName);
//   res.send("<h1>Home Registered successfully</h1>");
// });

// module.exports = hostRouter;





// Core module
const path = require("path");

// Express module
const express = require("express");
const hostRouter = express.Router();

// GET → show form page
hostRouter.get("/add-home", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../views", "add-home.html")
  );
});

// POST → handle form
hostRouter.post("/add-home", (req, res) => {
  console.log(req.body.houseName);

  res.sendFile(
    path.join(__dirname, "../views", "home-added.html")
  );
});

module.exports = hostRouter;
