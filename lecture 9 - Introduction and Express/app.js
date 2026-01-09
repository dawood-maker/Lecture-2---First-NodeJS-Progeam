//Core Modules
const http = require("http");
//External Modules
const express = require("express")
//Local Modules
const requestHandler = require("./user");

const PORT = 9875;

const app = express()
 app.use((req, res, next) => {
     console.log("Came in first Middleware", req.url, req.method);
     next();
 })

  app.use((req, res, next) => {
     console.log("Came in secound  Middleware", req.url, req.method)
 })

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
