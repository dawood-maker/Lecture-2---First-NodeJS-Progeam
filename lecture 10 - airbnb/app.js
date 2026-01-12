const express = require("express");
const app = express();
const PORT = 8090;

// Body parser (POST data read karne ke liye)
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// Home page
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to Airbnb</h1>
    <a href="/add-home">Add Home</a>
  `);
});

// Add Home Form GET
app.get("/add-home", (req, res) => {
  res.send(`
    <h1>Register your home here:</h1>
    <form action="/add-home" method="POST">
      <input
        type="text"
        name="houseName"
        placeholder="Enter the name for your home"
      />
      <button type="submit">Add Home</button>
    </form>
  `);
});

//POST Handling
app.post("/add-home", (req, res) => {
  res.send(`
    <h1>Home Registered successfully</h1>
    <a href="/">Go To Home</a>
  `);
});


// Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
