setTimeout(() => {
    //   console.log("Hello World");
  }, 2000);
  
  let counter = 0;
  
  const interval = setInterval(() => {
    //   console.log(++counter);
    if (counter === 5) {
      clearInterval(interval);
    }
  }, 1000);
  
  // console.log(__dirname);
  // console.log(__filename);
  // console.log(process);
  console.log(process.argv);
  
  
  performance.mark('start');
  
  // Some time-consuming operation
  for (let i = 0; i < 1e7; i++) {}
  
  performance.mark('end');
  performance.measure('MyOperation', 'start', 'end');
  
  const [measure] = performance.getEntriesByName('MyOperation');
  console.log(`Operation took ${measure.duration.toFixed(3)} milliseconds`);