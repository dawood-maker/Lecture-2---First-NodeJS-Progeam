const http = require("http");

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.end("<h1>Server is running</h1>");
  // process.exit();  // Stop event loop
  // console.log(req.url, req.method, req.headers)
});

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});


























///    ys is ka code number 1 ha or jo is kay uper wala code ha wo code number 2 ha ma wasa be hal sak tha ho localhost or asa be 


// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.end("<h1>Server is running</h1>");
// });

 
// server.listen(3001, () => {
//   console.log("Server running on address 3001");
// });






//  ma is ma asa kafe sara code lakar apna localhost ma chala sak tha ho  or yacode number 3 ha 



// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   if (req.url === "/") {
//     res.end("<h1>Home Page</h1>");
//   } else if (req.url === "/about") {
//     res.end("<h1>About Page</h1>");
//   } else if (req.url === "/contact") {
//     res.end("<h1>Contact Page</h1>");
//   } else if (req.url === "/dawood"){
//     res.end("<h1>404 Page Not Found</h1>");
//   }
// });

// server.listen(3001, () => {
//   console.log("Server running on port 3001");
// });
