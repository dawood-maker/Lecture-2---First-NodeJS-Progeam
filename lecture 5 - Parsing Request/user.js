const http = require("http");
const fs = require("fs");

const PORT = 8000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Home page
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head><title>Practise Coding Test </title></head>");
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
    const body = [];
    req.on("data", chunk => body.push(chunk));
    req.on("end", () => {
      const parsed = Buffer.concat(body).toString();

      // Save user input in file (append for multiple submissions)
      fs.appendFileSync('Dawood.txt', parsed + '\n', 'utf8');
      console.log("User data saved:", parsed);

      // Send response to browser (visible in network tab)
      res.setHeader("Content-Type", "text/html");
      res.write("<html><body style='text-align:center;'>");
      res.write("<h1>Data Saved Successfully!</h1>");
      res.write("<p>" + parsed + "</p>");
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
