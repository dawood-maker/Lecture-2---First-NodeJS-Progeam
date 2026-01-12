// const express = require("express");
// const bodyparser = require("body-parser");
// const app = express();
// const PORT = 1213;

// app.use("/", (req, res, next) => {
//   console.log("First Dummy Middleware", (req.url, req.method));
//   next();
// });

// app.use((req, res, next) => {
//   console.log("secound Dummy Middleware", (req.url, req.method));
//   next();
// });

// // app.use((req, res, next) => {
// //   console.log("Third Middleware", (req.url, req.method));
// //   res.send("<h1>Welcome to Complete Codign</h1>")
// // });

// app.get("/", (req, res, next) => {
//   console.log("Handling / for GET", (req.url, req.method));
//   res.send(`
//     <h1>Welcome to Complete Codign</h1>`);
// });

// app.get("/contact-us", (req, res, next) => {
//   console.log("Handling /contact-us for GET", (req.url, req.method));
//   res.send(`
//     <h1>Pleace give your detail here</h1>
//      <form action="/contact-us" method="POSt">
//       <input type="text"  name="name"  placeholder="Enter your name " />
//       <input type="email"  name="email"  placeholder="Enter your Email" />
//       <input type="submit" />
//      </form>
//     `);
// });

// app.post("/contact-us", (req, res, next) => {
//   console.log("First Handling ", (req.url, req.method, req.body));
//     next();
// });

// app.use(bodyparser.urlencoded);

// app.post("/contact-us", (req, res, next) => {
//   console.log("Handling /contact-us for POST", (req.url, req.method, req.body));
//   res.send(`
//       <h1>We will contact you  shortly</h1>
//       `);
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running at Addres http://localhost:${PORT}`);
// });









const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 1213;

/* BODY PARSER (routes se pehle) */
app.use(bodyParser.urlencoded({ extended: false }));

/* FIRST MIDDLEWARE */
app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

/* SECOND MIDDLEWARE */
app.use((req, res, next) => {
  console.log("Second Dummy Middleware", req.url, req.method);
  next();
});

/* HOME ROUTE */
app.get("/", (req, res) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send("<h1>Welcome to Complete Coding</h1>");
});

/* CONTACT FORM */
app.get("/contact-us", (req, res) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
    <h1>Please give your details</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" /><br><br>
      <input type="email" name="email" placeholder="Enter your email" /><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

/* FORM SUBMIT */
app.post("/contact-us", (req, res) => {
  console.log("Handling /contact-us for POST");
  console.log(req.body);

  res.send("<h1>We will contact you shortly</h1>");
});

/* SERVER */
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
