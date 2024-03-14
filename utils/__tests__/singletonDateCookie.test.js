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
});
