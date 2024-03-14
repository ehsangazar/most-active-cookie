const parseArgs = require("../parseArgs");

describe("parseArgs", () => {
  it("should return an object with filename and date properties", () => {
    const args = ["", "", "-f", "filename", "-d", "date"];
    const result = parseArgs(args);
    expect(result).toEqual({ filename: "filename", date: "date" });
  });

  it("should return an object with filename property", () => {
    const args = ["", "", "-f", "filename"];
    const result = parseArgs(args);
    expect(result).toEqual({ filename: "filename" });
  });

  it("should return an object with date property", () => {
    const args = ["", "", "-d", "date"];
    const result = parseArgs(args);
    expect(result).toEqual({ date: "date" });
  });

  it("should return an empty object", () => {
    const args = ["", ""];
    const result = parseArgs(args);
    expect(result).toEqual({});
  });

  it("should return an empty object", () => {
    const args = ["", "", "-f"];
    const result = parseArgs(args);
    expect(result).toEqual({});
  });

  it("should return an empty object", () => {
    const args = ["", "", "-d"];
    const result = parseArgs(args);
    expect(result).toEqual({});
  });

  it("should return an empty object", () => {
    const args = ["", "", "-f", "filename", "-d"];
    const result = parseArgs(args);
    expect(result).toEqual({
      filename: "filename",
      date: undefined,
    });
  });
});
