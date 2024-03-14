// AtY0laUfhglK3lC7,2018-12-09T14:19:00+00:00

const singletonDateCookieCounter = () => {
  let instance;
  let dateCookieCounts = {};

  const createInstance = () => {
    return {
      cookieParser(cookieLine) {
        const cookie = cookieLine.split(",")[0];
        const date = cookieLine.split(",")[1].split("T")[0];

        if (
          !cookie.match(/^[a-zA-Z0-9]+$/) ||
          !date.match(/^\d{4}-\d{2}-\d{2}$/)
        ) {
          return {
            cookie: null,
            date: null,
          };
        }

        return {
          cookie: cookieLine.split(",")[0],
          date: cookieLine.split(",")[1].split("T")[0],
        };
      },
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
      pushToCookieCount(date, cookie) {
        dateCookieCounts[date].push({
          cookie,
          count: 1,
        });
      },
      swapIfPreviousCookieCountIsLess(date, cookieIndex) {
        let previousIndex = cookieIndex - 1;
        while (
          previousIndex > 0 &&
          dateCookieCounts[date][previousIndex].count >
            dateCookieCounts[date][cookieIndex].count
        ) {
          const temp = dateCookieCounts[date][cookieIndex];
          dateCookieCounts[date][cookieIndex] =
            dateCookieCounts[date][cookieIndex - 1];
          dateCookieCounts[date][cookieIndex - 1] = temp;

          previousIndex -= 1;
        }
      },
      addCookieLine(cookieLine, exactDate) {
        const { cookie, date } = this.cookieParser(cookieLine);

        if (!cookie || !date) {
          return;
        }

        if (exactDate && date !== exactDate) {
          return;
        }

        if (!dateCookieCounts[date]) {
          this.setDateCookieCountToOne(date, cookie);
        } else {
          const cookieIndex = this.findCookieIndex(date, cookie);

          if (cookieIndex === -1) {
            this.pushToCookieCount(date, cookie);
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
      getMostUsedCookieForSpecificDate(exactDate) {
        const result = this.getAllResultForSpecificDate(exactDate);
        const mostUsedCookie = [];
        if (result) {
          const maxCount = result[0].count;
          result.forEach((cookieData) => {
            if (cookieData.count === maxCount) {
              mostUsedCookie.push(cookieData.cookie);
            }
          });
        }

        return mostUsedCookie;
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
