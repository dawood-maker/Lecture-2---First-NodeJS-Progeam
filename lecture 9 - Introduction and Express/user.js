const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  // ================= HOME PAGE =================
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");

    res.write(`
      <html>
        <head><title>Complete Coding</title></head>
        <body style="text-align:center;">
          <h1>Enter Your Details</h1>

          <form method="POST" action="/submit-details">
            <input type="text" name="username" placeholder="Enter Your Name" style="width:300px;" required />
            <br><br>

            <label>Male</label>
            <input type="radio" name="gender" value="male" required />
            <label>Female</label>
            <input type="radio" name="gender" value="female" />
            <br><br>

            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
    `);

    return res.end();
  }

  // ================= FORM SUBMIT =================
  if (req.url === "/submit-details" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      fs.appendFile("user.txt", body + "\n", (err) => {
        if (err) {
          res.statusCode = 500;
          return res.end("Error saving data");
        }

        res.setHeader("Content-Type", "text/html");
        res.write(`
          <html>
            <body style="text-align:center;">
              <h1>Data Saved Successfully ✅</h1>
              <p>${body}</p>
              <a href="/">Go Back</a>
            </body>
          </html>
        `);
        res.end();
      });
    });
    return;
  }

  // ================= 404 =================
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1 style='text-align:center;'>404 Page Not Found</h1>");
};

module.exports = requestHandler;
