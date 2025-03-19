const fs = require("fs");

function writeToFile(filename, data) {
  fs.writeFileSync(filename, data.join("\n"), "utf8");
}

module.exports = { writeToFile };
