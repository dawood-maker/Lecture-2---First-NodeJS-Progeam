const userController = require("../controllers/userController");

const userRoutes = (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    return userController.getHomePage(req, res);
  }

  if (req.url === "/submit-details" && req.method === "POST") {
    return userController.postUserDetails(req, res);
  }

  // 404
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body><h1>404 Page Not Found</h1></body></html>");
  res.end();
};

module.exports = userRoutes;
