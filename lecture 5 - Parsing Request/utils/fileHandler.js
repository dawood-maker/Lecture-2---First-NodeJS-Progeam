const fs = require("fs");

exports.saveToFile = (data) => {
  fs.appendFileSync("Dawood.txt", data + "\n", "utf8");
};
