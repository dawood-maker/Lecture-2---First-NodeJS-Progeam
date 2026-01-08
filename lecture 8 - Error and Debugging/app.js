const http = require("http");
const testingSyntax = require("./syntax");
const PORT = 9875;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  testingSyntax(); // ✅ now this will work

  res.end("Server is running");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
