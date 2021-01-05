
Function.prototype.myApply = function(context, args) {
  if (typeof this !== 'function') {
    throw new Error('need function')
  }
  const fn = Symbol();
  context = context || window;
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

const func = function(value) {
  this.name = 'func';
  return ({
    name: this.name,
    value,
  })
};

const obj = ({
  name: 'obj'
})
console.log(func(10))
console.log(func.call(obj, 20))