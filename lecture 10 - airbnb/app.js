//Express module
const express = require("express");

//Local modules
const userRouter = require("./route/userRouter");
const hostRouter = require("./route/hostRouter");

const app = express();
const PORT = 8090;

// Logger middleware
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// Body parser middleware
app.use(express.urlencoded({ extended: false }));

// Routes middleware
app.use(userRouter);
app.use(hostRouter);

// Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
