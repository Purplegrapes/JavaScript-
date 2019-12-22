Function.prototype.myCall = function(context, ...args) {
  if (this === Function.prototype) {
    throw new Error('noe')
  }
  const fn = Symbol();
  context[fn] = this;
  let result;
  if(args) {
    result = context[fn](...args);
  } else {
    result = context[fn]()
  }
  delete context[fn]
  return result;

}
