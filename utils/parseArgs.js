const parseArgs = (args) => {
  const parsedArgs = {};
  const slicedArgs = args.slice(2);

  for (let i = 0; i < slicedArgs.length; i++) {
    if (slicedArgs[i] === "-f") {
      parsedArgs.filename = slicedArgs[i + 1];
    }
    if (slicedArgs[i] === "-d") {
      parsedArgs.date = slicedArgs[i + 1];
    }
  }

  return parsedArgs;
};

module.exports = parseArgs;
