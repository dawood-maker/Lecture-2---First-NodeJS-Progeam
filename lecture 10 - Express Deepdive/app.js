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
