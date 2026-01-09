const http = require("http");
const requestHandler = require("./user");

const PORT = 9875;

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
