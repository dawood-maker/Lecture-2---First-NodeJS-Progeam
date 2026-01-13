// const express = require("express");
// const path = require("path");
// const PORT = 2026;

// const pagesRouter = require("./routes/pages");
// const contactRouter = require("./routes/contact");

// const app = express();

// // Body parser
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use(pagesRouter);
// app.use(contactRouter);

// // 404 Page
// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// });

// // Server
// app.listen(PORT, () => {
//   console.log(`✅ Server running at  Addres http://localhost:${PORT}`);
// });


const express = require("express");
const path = require("path");
const PORT = 2026;

const pagesRouter = require("./routes/pages");
const contactRouter = require("./routes/contact");

const app = express();

// ✅ STATIC FILES (THIS WAS MISSING)
app.use(express.static(path.join(__dirname, "public")));

// Body parser
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(pagesRouter);
app.use(contactRouter);

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
