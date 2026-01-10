const express = require("express");
const app = express();
const PORT = 1212;

app.use("/", (req, res, next) => {
  console.log("First Dummy Middleware", (req.url, req.method));
  next();
});

app.use((req, res, next) => {
  console.log("secound Dummy Middleware", (req.url, req.method));
  next();
});

// app.use((req, res, next) => {
//   console.log("Third Middleware", (req.url, req.method));
//   res.send("<h1>Welcome to Complete Codign</h1>")
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", (req.url, req.method));
  res.send(`
    <h1>Welcome to Complete Codign</h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", (req.url, req.method));
  res.send(`
    <h1>Pleace give your detail here</h1>
     <form action="/contact-us" method="POSt">
      <input type="text"  name="name"  placeholder="Enter your name " />
      <input type="email"  name="email"  placeholder="Enter your Email" />
      <input type="submit" />
     </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", (req.url, req.method));
  res.send(`
      <h1>We will contact you  shortly</h1>
      `);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at Addres http://localhost:${PORT}`);
});
