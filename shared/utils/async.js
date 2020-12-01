function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(`${interval}-result`);
    }, interval);
  });
};
const intervals = [3000, 2000, 1000];
const logInOrder = async function() {
  const textPromises = intervals.map(async interval => {
      const result = await timeoutPromise(interval);
      console.log(result)
      return result;
  })
  for (const textPromise of textPromises) {
      console.log(await textPromise);
    };
};