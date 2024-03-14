const parseArgs = require("../parseArgs");

describe("parseArgs", () => {
  xit("should return an object with filename and date properties", () => {
    const args = ["", "", "-f", "filename", "-d", "date"];
    const result = parseArgs(args);
    expect(result).toEqual({ filename: "filename", date: "date" });
  });
});
