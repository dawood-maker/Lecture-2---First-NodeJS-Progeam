const http = require("http");
const { requestHandler } = require("./handler");

const PORT = 8001;

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server running at adress http://localhost:${PORT}`);
});
