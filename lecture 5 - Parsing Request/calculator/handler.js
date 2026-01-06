const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write(`
    <html>
     <header>
      <title>Practies Set</title>
     </header>
      <body> 
       <h1>Wlecome to Calcultor</h1>
       <a href="/calculator">got to calculator</a>
      </body>
    </html>
    `);
    return res.end;
  }
  res.setHeader("Content-type", "text/html");
  res.write(`
    <html>
     <header>
      <title>Practies Set</title>
     </header>
      <body> 
       <h1>404 Page Does not Exist</h1>
       <a href="/">got to Home</a>
      </body>
    </html>
    `);
  return res.end;
};

exports.requestHandler = requestHandler;
