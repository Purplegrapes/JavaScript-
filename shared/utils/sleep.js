
const sleep = (interval) => {
  return new Promise((resolve) => {
    setTimeout(resolve, interval);
  });
}
(async function() {
  for(let i = 0; i < 5; i++) {
    console.log(i);
    await sleep(2000);
  }
})();