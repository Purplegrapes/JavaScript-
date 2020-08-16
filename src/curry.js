let currying = (fn, ...args) => {
  console.log(...args)
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