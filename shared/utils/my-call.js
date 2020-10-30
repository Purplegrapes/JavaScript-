Function.prototype.myCall = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('need function')
  }
  context = context || window;
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

const obj = {
  value: 'xx'
}

function Func(name, age) {
  return ({
    name,
    age,
    value: this.value,
  })
}
Func.myCall(obj);
Func.call(obj);