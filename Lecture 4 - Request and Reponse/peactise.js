const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/Home") {
    res.write("<h1>Wel come my Home</h1>");
    return res.end();
  } else if (req.url === "/Men") {
    res.write("<h1>Wel come my Men</h1>");
    return res.end();
  } else if (req.url === "/Women") {
    res.write("<h1>Wel come my women</h1>");
    return res.end();
  } else if (req.url === "/Kids") {
    res.write("<h1>Wel come my Kids</h1>");
    return res.end();
  } else if (req.url === "/Cart") {
    res.write("<h1>Wel come my Cart</h1>");
    return res.end();
  }

  res.write(
    `
<html lang="en">
  <head>
    <title>Myntra</title>
  </head>
  <body>
    <head>
      <nav>
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href="/Men">Men</a></li>
          <li><a href="/Women">Women</a></li>
          <li><a href="/Kids">Kids</a></li>
          <li><a href="/Cart">Cart</a></li>
        </ul>
      </nav>
    </head>
  </body>
</html>
  `
  );
  return res.end();
});

server.listen(2026, () => {
  console.log("Server running at http://localhost:2026");
});
