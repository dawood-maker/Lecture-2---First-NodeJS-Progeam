const http = require("http");
const userRoutes = require("./routes/userRoutes");

const PORT = 8000;

const server = http.createServer(userRoutes);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
