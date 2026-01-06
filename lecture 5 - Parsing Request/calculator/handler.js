const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  // HOME PAGE
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
    return res.end(); // ✅ FIX
  }

  // CALCULATOR PAGE
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
            <input type="text" placeholder="First Num" name="first" />
            <input type="text" placeholder="Second Num" name="second" />
            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
    `);
    return res.end(); // ✅ VERY IMPORTANT
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
