const http = require("http");
const testingSyntax = require("./syntax");
const runtime = require("./runtime");
const logical = require("./logical");
const debugging = require("./debugging");
const PORT = 9875;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // ya mara syntax error ka ha
  // testingSyntax(); // ✅ now this will work

  // ya mara RunTime error ka ha
  // runtime();

  // ya mara logical error ka ha
  // logical();

  // ya ak debugging ka code ha
  debugging();

  res.end("Server is running");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
