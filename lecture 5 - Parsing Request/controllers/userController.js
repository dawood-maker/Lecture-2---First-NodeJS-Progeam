const querystring = require("querystring");
const fileHandler = require("../utils/fileHandler");

exports.getHomePage = (req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.write("<html>");
  res.write("<head><title>Practise Coding Test</title></head>");
  res.write("<body style='text-align:center;'>");

  res.write("<h1>Enter Your Details</h1>");

  res.write('<form method="POST" action="/submit-details">');
  res.write(
    '<input type="text" name="username" placeholder="Enter Your Name"><br><br>'
  );

  res.write("<label>Male</label>");
  res.write('<input type="radio" name="gender" value="male">');

  res.write("<label>Female</label>");
  res.write('<input type="radio" name="gender" value="female"><br><br>');

  res.write('<input type="submit" value="Submit">');
  res.write("</form>");

  res.write("</body></html>");
  res.end();
};

exports.postUserDetails = (req, res) => {
  let body = "";

  req.on("data", (chunk) => (body += chunk));

  req.on("end", () => {
    const parsedData = querystring.parse(body);
    const saveData = `Name: ${parsedData.username}, Gender: ${parsedData.gender}`;

    fileHandler.saveToFile(saveData);

    res.setHeader("Content-Type", "text/html");
    res.write("<html><body style='text-align:center;'>");
    res.write("<h1>Data Saved Successfully!</h1>");
    res.write(`<p>${saveData}</p>`);
    res.write('<a href="/">Go Back</a>');
    res.write("</body></html>");
    res.end();
  });
};
