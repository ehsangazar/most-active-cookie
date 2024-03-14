const parseArgs = require("./utils/parseArgs");
const processLogFile = require("./utils/processLogFile");

const app = () => {
  const { filename, date } = parseArgs(process.argv);

  if (!filename) {
    console.log("Please provide a filename using -f flag");
    return;
  }

  if (!date) {
    console.log("Please provide a date using -d flag");
    return;
  }

  processLogFile(filename, date);
};

app();

module.exports = app;
