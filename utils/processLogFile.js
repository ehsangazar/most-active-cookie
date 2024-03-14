const fs = require("fs");
const singletonDateCookie = require("./singletonDateCookie");

const processLogFile = async (filename, date) => {
  try {
    // read the file asynchronously
    const data = await fs.promises.readFile(filename, "utf8");
    const lines = data.split("\n");
    const dateCookieObj = singletonDateCookie.getInstance();
    dateCookieObj.clearInstance();
    lines.forEach((line) => {
      dateCookieObj.addCookieLine(line, date);
    });
    const result = dateCookieObj.getMostUsedCookieForSpecificDate(date);
    console.log(result.join("\n"));
  } catch (err) {
    console.error("Error reading file");
    return;
  }
};

module.exports = processLogFile;
