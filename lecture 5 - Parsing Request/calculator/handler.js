const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  // HOME PAGE (GET)
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Practice Set</title>
        </head>
        <body>
          <h1>Welcome to Calculator</h1>
          <a href="/calculator">Go to Calculator</a>
        </body>
      </html>
    `);
    return res.end();
  }

  // CALCULATOR PAGE (GET)
  else if (req.url === "/calculator" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Practice Set</title>
        </head>
        <body>
          <h1>Here is the Calculator</h1>
          <form action="/calculator-result" method="POST">
            <input type="number" placeholder="First Num" name="first" required />
            <input type="number" placeholder="Second Num" name="second" required />
            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  // CALCULATOR RESULT (POST)
  else if (req.url === "/calculator-result" && req.method === "POST") {
    return sumRequestHandler(req, res);
  }

  // 404 PAGE
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>Practice Set</title>
      </head>
      <body>
        <h1>404 Page Does Not Exist</h1>
        <a href="/">Go to Home</a>
      </body>
    </html>
  `);
  res.end();
};

exports.requestHandler = requestHandler;
