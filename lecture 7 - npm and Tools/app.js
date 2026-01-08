const http = require("http");

const PORT = 9876;

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
