//Express module
const express = require("express");

//Local modules
const userRouter = require("./route/userRouter");
const hostRouter = require("./route/hostRouter");

const app = express();
const PORT = 8090;

// Body parser middleware
app.use(express.urlencoded({ extended: false }));

// Routes middleware
app.use(userRouter);
app.use(hostRouter);


     //  404 ERROR coding
app.use((req, res, next) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>404 | Airbnb</title>
        <style>
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .container {
            text-align: center;
            background: #fff;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          }
          img {
            width: 300px;
            margin-bottom: 20px;
          }
          h1 {
            color: #ff385c;
            margin-bottom: 10px;
          }
          p {
            color: #555;
            margin-bottom: 20px;
          }
          a {
            text-decoration: none;
            background-color: #ff385c;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
          }
          a:hover {
            background-color: #e03150;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <img 
            src="https://i.imgur.com/qIufhof.png" 
            alt="Page Not Found"
          />
          <h1>404 - Page Not Found</h1>
          <p>Sorry! The page you are looking for does not exist on Airbnb.</p>
          <a href="/">Go Back Home</a>
        </div>
      </body>
    </html>
  `);
});


// Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
