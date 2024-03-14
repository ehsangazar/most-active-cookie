// AtY0laUfhglK3lC7,2018-12-09T14:19:00+00:00

const singletonDateCookieCounter = () => {
  let instance;
  let dateCookieCounts = {};

  const createInstance = () => {
    return {
      findCookieIndex(date, cookie) {
        return dateCookieCounts[date].findIndex(
          (cookieData) => cookieData.cookie === cookie
        );
      },
      setDateCookieCountToOne(date, cookie) {
        dateCookieCounts[date] = [
          {
            cookie,
            count: 1,
          },
        ];
      },
      swapIfPreviousCookieCountIsLess(date, cookieIndex) {
        if (
          dateCookieCounts[date][cookieIndex - 1] &&
          dateCookieCounts[date][cookieIndex].count >
            dateCookieCounts[date][cookieIndex - 1].count
        ) {
          [
            dateCookieCounts[date][cookieIndex],
            dateCookieCounts[date][cookieIndex - 1],
          ] = [
            dateCookieCounts[date][cookieIndex - 1],
            dateCookieCounts[date][cookieIndex],
          ];
        }
      },
      addCookieLine(cookieLine) {
        const date = cookieLine.split(",")[1].split("T")[0];
        const cookie = cookieLine.split(",")[0];

        if (!dateCookieCounts[date]) {
          this.setDateCookieCountToOne(date, cookie);
        } else {
          const cookieIndex = this.findCookieIndex(date, cookie);

          if (cookieIndex === -1) {
            this.setDateCookieCountToOne(date, cookie);
          } else {
            dateCookieCounts[date][cookieIndex].count += 1;
            this.swapIfPreviousCookieCountIsLess(date, cookieIndex);
          }
        }
        return dateCookieCounts;
      },
      getAllResultForSpecificDate(exactDate) {
        return dateCookieCounts[exactDate] || null;
      },
      clearInstance() {
        dateCookieCounts = {};
      },
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
};

module.exports = singletonDateCookieCounter();
