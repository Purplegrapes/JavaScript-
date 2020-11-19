// indexOf includes
function uniq(arr) {
  let result = [];
  for (let i = 0; i< arr.length; i++) {
    if (result.indexOf(arr[i]) === -1 || result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result;
}
// reduce
function uniq2(arr) {
  return arr.reduce((pre, curr) => {
    return pre.includes(curr) ? pre : pre.concat(curr)
  }, []);
}