const http = require("http");

const PORT = 8090;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.header);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<header><title>Complete coding </title></header>");
    res.write("<body><h1>Welcome to Home </h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<header><title>Complete coding </title></header>");
    res.write("<body><h1>Checkout our products</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<header><title>Complete coding </title></header>");
  res.write("<body><h1>Like / Share / Subscribe</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
