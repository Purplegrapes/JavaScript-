const add = (...res) => {
  let nums = [...res];
  const sum = (...res) => {
    nums.push(...res);
    return sum;
  };
  sum.toString = () => nums.reduce((pre, curr) => pre + curr, 0);
  return sum;
}
console.log(add(1)(3, 4)(5))