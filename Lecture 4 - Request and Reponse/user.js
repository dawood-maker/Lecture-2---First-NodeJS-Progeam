const http = require("http");
const fs = require("fs");

const PORT = 8090;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Home page
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body>");
    res.write("<h1 style='text-align:center;'>Enter Your Details</h1>");
    res.write('<form method="POST" action="/submit-details" style="text-align:center;">');
    res.write('<input type="text" name="username" placeholder="Enter Your Name" style="width:300px;"><br><br>');
    res.write('<label>Male</label>');
    res.write('<input type="radio" name="gender" value="male">');
    res.write('<label>Female</label>');
    res.write('<input type="radio" name="gender" value="female"><br><br>');
    res.write('<input type="submit" value="Submit"><br><br>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  // Handle form submission
  else if (req.url.toUpperCase() === "/SUBMIT-DETAILS" && req.method === "POST") {
    let body = "";

    req.on("data", data => body += data); // directly concatenate data
    req.on("end", () => {
      fs.appendFileSync('user.txt', body + '\n', 'utf8'); // save input
      console.log("User data saved:", body);

      res.setHeader("Content-Type", "text/html");
      res.write("<html><body style='text-align:center;'>");
      res.write("<h1>Data Saved Successfully!</h1>");
      res.write("<p>" + body + "</p>");
      res.write('<a href="/">Go Back</a>');
      res.write("</body></html>");
      res.end();
    });
  }

  // Default page
  else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1 style='text-align:center;'>Like / Share / Subscribe</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
