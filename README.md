# Most Active Cookie

This is a repository of a nodejs project to find the most used Cookie

## Problem

if a .csv file supported including cookies like the format below

```
AtY0laUfhglK3lC7,2018-12-09T14:19:00+00:00
SAZuXPGUrfbcn5UA,2018-12-09T10:13:00+00:00
5UAVanZf6UtGyKVS,2018-12-09T07:25:00+00:00
AtY0laUfhglK3lC7,2018-12-09T06:19:00+00:00
SAZuXPGUrfbcn5UA,2018-12-08T22:03:00+00:00
4sMM2LxV07bPJzwf,2018-12-08T21:30:00+00:00
fbcn5UAVanZf6UtG,2018-12-08T09:30:00+00:00
4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00
```

find the most active cookie on a specific date.

## Business Needs

- Accurate reporting on the most used cookie / cookies
- Scalability on performing this function on large data set
- Considering having a range date like 2018-12-09,2018-12-12
- Make it easy to change if cookie string has changed
- Make sure it is easy to maintain

## Assumptions

- If multiple cookies meet that criteria, please return all of them on separate lines.
- You can assume -d parameter takes date in UTC time zone.
- You have enough memory to store the contents of the whole file.
- Cookies in the log file are sorted by timestamp
  (most recent occurrence is the first line of the file).

## Technical Needs

- Parsing a CSV file
- Memory Usage
- Error Handling
- Performance
- Scalibility
- Testing
- Documentation

## Solution

The app has three parts

1. parseArgs: Arguement parser in order to understand the command lines
2. processLogFile: which is read the CSV file
3. singletonDateCookie: which is for counting cookie usage on the date,
   please consider that this will parse the cookies line by line and it updates the same instance.

## Future Considerations

- if we wanted to not provide exactDate as part of the command, or if we wanted to have multiple dates selected
  (Easy to change, we just need to remove the condition of exactDate and write a different function)
- if we had more than one .csv files
  (Easy again, as it's singleton, we can have more than one files and combine their results)
- If cookie format changed, it should be easy to change the cookies
  (Easy again, cookieParser just needs to be updated)

## How to use it?

Make sure you have node installed and and your version is >= v20.11.1

```
./node -f cookie_log.csv -d 2018-12-09
```

## How to run the tests?

In order to run the tests you need to install and run the npm tests

```
pnpm install
pnpm test:watch // watch tests
pnpm test // run tests once
```
