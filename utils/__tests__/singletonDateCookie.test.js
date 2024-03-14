const singletonDateCookie = require("../singletonDateCookie");

describe("singletonDateCookie", () => {
  it("should return an object with a method getInstance", () => {
    const dateCookieObj = singletonDateCookie.getInstance();
    dateCookieObj.clearInstance();
    dateCookieObj.addCookieLine("4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00");
    const result = dateCookieObj.getAllResultForSpecificDate("2018-12-07");
    expect(result).toEqual([
      {
        cookie: "4sMM2LxV07bPJzwf",
        count: 1,
      },
    ]);
  });
  it("should return an object with a method getInstance", () => {
    const dateCookieObj = singletonDateCookie.getInstance();
    dateCookieObj.clearInstance();
    dateCookieObj.addCookieLine("fbcn5UAVanZf6UtG,2018-12-08T09:30:00+00:00");
    const result = dateCookieObj.getAllResultForSpecificDate("2018-12-08");
    expect(result).toEqual([
      {
        cookie: "fbcn5UAVanZf6UtG",
        count: 1,
      },
    ]);
  });

  it("should return count 2", () => {
    const dateCookieObj = singletonDateCookie.getInstance();
    dateCookieObj.clearInstance();
    dateCookieObj.addCookieLine("4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00");
    dateCookieObj.addCookieLine("4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00");
    const result = dateCookieObj.getAllResultForSpecificDate("2018-12-07");
    expect(result).toEqual([
      {
        cookie: "4sMM2LxV07bPJzwf",
        count: 2,
      },
    ]);
  });

  it("should return count 1 for different dates", () => {
    const dateCookieObj = singletonDateCookie.getInstance();
    dateCookieObj.clearInstance();
    dateCookieObj.addCookieLine("4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00");
    dateCookieObj.addCookieLine("4sMM2LxV07bPJzwf,2018-12-08T23:30:00+00:00");
    const result1 = dateCookieObj.getAllResultForSpecificDate("2018-12-07");
    const result2 = dateCookieObj.getAllResultForSpecificDate("2018-12-08");
    expect(result1).toEqual([
      {
        cookie: "4sMM2LxV07bPJzwf",
        count: 1,
      },
    ]);
    expect(result2).toEqual([
      {
        cookie: "4sMM2LxV07bPJzwf",
        count: 1,
      },
    ]);
  });
  it("should return count 1 and 2 for different dates", () => {
    const dateCookieObj = singletonDateCookie.getInstance();
    dateCookieObj.clearInstance();
    dateCookieObj.addCookieLine("4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00");
    dateCookieObj.addCookieLine("4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00");
    dateCookieObj.addCookieLine("4sMM2LxV07bPJzwf,2018-12-08T23:30:00+00:00");
    const result1 = dateCookieObj.getAllResultForSpecificDate("2018-12-07");
    const result2 = dateCookieObj.getAllResultForSpecificDate("2018-12-08");
    expect(result1).toEqual([
      {
        cookie: "4sMM2LxV07bPJzwf",
        count: 2,
      },
    ]);
    expect(result2).toEqual([
      {
        cookie: "4sMM2LxV07bPJzwf",
        count: 1,
      },
    ]);
  });
  it("should return null for non-existing date", () => {
    const dateCookieObj = singletonDateCookie.getInstance();
    dateCookieObj.clearInstance();
    dateCookieObj.addCookieLine("4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00");
    const result = dateCookieObj.getAllResultForSpecificDate("2018-12-08");

    expect(result).toBe(null);
  });

  it("should not consider other dates if date is provided", () => {
    const dateCookieObj = singletonDateCookie.getInstance("2018-12-07");
    dateCookieObj.clearInstance();
    dateCookieObj.addCookieLine(
      "4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00",
      "2018-12-07"
    );
    dateCookieObj.addCookieLine(
      "4sMM2LxV07bPJzwf,2018-12-08T23:30:00+00:00",
      "2018-12-07"
    );
    const result1 = dateCookieObj.getAllResultForSpecificDate("2018-12-07");
    expect(result1).toEqual([
      {
        cookie: "4sMM2LxV07bPJzwf",
        count: 1,
      },
    ]);

    const result2 = dateCookieObj.getAllResultForSpecificDate("2018-12-08");
    expect(result2).toBe(null);
  });

  it("should return most used cookie", () => {
    const dateCookieObj = singletonDateCookie.getInstance();
    dateCookieObj.clearInstance();
    dateCookieObj.addCookieLine("4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00");
    dateCookieObj.addCookieLine("4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00");
    dateCookieObj.addCookieLine("fbcn5UAVanZf6UtG,2018-12-07T23:30:00+00:00");
    dateCookieObj.addCookieLine("fbcn5UAVanZf6UtG,2018-12-08T23:30:00+00:00");
    dateCookieObj.addCookieLine("fbcn5UAVanZf6UtG,2018-12-09T23:30:00+00:00");
    const result = dateCookieObj.getMostUsedCookieForSpecificDate("2018-12-07");
    expect(result).toEqual(["4sMM2LxV07bPJzwf"]);
  });

  it("should return most used cookies", () => {
    const dateCookieObj = singletonDateCookie.getInstance();
    dateCookieObj.clearInstance();
    dateCookieObj.addCookieLine("4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00");
    dateCookieObj.addCookieLine("4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00");
    dateCookieObj.addCookieLine("fbcn5UAVanZf6UtG,2018-12-07T23:30:00+00:00");
    dateCookieObj.addCookieLine("fbcn5UAVanZf6UtG,2018-12-07T23:30:00+00:00");
    dateCookieObj.addCookieLine("sajj32eoij2o3joi,2018-12-07T23:30:00+00:00");
    const result = dateCookieObj.getMostUsedCookieForSpecificDate("2018-12-07");
    expect(result).toEqual(["4sMM2LxV07bPJzwf", "fbcn5UAVanZf6UtG"]);
  });
});
