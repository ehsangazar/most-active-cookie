const processLogFile = require("../processLogFile");

describe("processLogFile", () => {
  it("should return the most used cookie for a specific date", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    await processLogFile("./sample/cookie_log.csv", "2018-12-09");
    expect(consoleSpy).toHaveBeenCalledWith("AtY0laUfhglK3lC7");
  });

  it("should return an error if the file is not found", async () => {
    const consoleSpy = jest.spyOn(console, "error");
    await processLogFile("nonexistent.csv", "2018-12-09");
    expect(consoleSpy).toHaveBeenCalledWith("Error reading file");
  });

  it("should return an error if the file has csv errors", async () => {
    const consoleSpy = jest.spyOn(console, "error");
    await processLogFile("./sample/invalid_cookie_log.csv", "2018-12-09");
    expect(consoleSpy).toHaveBeenCalledWith("Error reading file");
  });
});
