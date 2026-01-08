const http = require("http");
const testingSyntax = require("./syntax");
const runtime = require("./runtime");
const PORT = 9875;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // testingSyntax(); // ✅ now this will work
  runtime();

  res.end("Server is running");
  res.end("");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
