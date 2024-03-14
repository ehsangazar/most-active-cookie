const app = require("../index");

describe("app", () => {
  it("should return 'Please provide a filename using -f flag' when no filename is provided", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    app();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Please provide a filename using -f flag"
    );
  });

  it("should return 'Please provide a date using -d flag' when no date is provided", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    process.argv = ["", "", "-f", "filename"];
    app();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Please provide a date using -d flag"
    );
  });
});
