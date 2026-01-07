const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Handler", req.url);

  let body = "";

  // 1 Read incoming POST data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  // 2 After data is fully received
  req.on("end", () => {
    // body example: first=10&second=20
    const parsedData = new URLSearchParams(body);

    const first = Number(parsedData.get("first"));
    const second = Number(parsedData.get("second"));

    const sum = first + second;

    // 3 Send response
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Calculator Result</title>
        </head>
        <body>
          <h1>Calculation Result</h1>
          <p>${first} + ${second} = <strong>${sum}</strong></p>
          <a href="/calculator">Go Back</a>
        </body>
      </html>
    `);
    res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
