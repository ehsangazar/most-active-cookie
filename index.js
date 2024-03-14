const parseArgs = require("./utils/parseArgs");
const processLogFile = require("./utils/processLogFile");

const app = async () => {
  const { filename, date } = parseArgs(process.argv);

  if (!filename) {
    console.log("Please provide a filename using -f flag");
    return;
  }

  if (!date) {
    console.log("Please provide a date using -d flag");
    return;
  }

  if (!filename.match(/\.csv$/)) {
    console.log("Please provide a filename with .csv extension");
    return;
  }

  if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
    console.log("Please provide a date in the format YYYY-MM-DD");
    return;
  }

  await processLogFile(filename, date);
};

app();

module.exports = app;
