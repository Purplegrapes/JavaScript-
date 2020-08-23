//函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
let currying = (fn, ...args) => {
  console.log(...args)
  // 获取函数需要的参数长度
  if (fn.length > args.length) {
   return (...res) => {
       console.log(...res)
       return currying(fn, ...args, ...res);
   };
  }
  return fn(...args);
}
let addSum = (a, b, c) => a+b+c
let add = currying(addSum)
add(1)(3)(4)