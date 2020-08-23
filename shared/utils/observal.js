const callbacks = new Set();
const observe = fn => callbacks.add(fn); // 观察者函数
const observable = obj => new Proxy(obj, {
  set: function (target, key, value, receiver) {   
    const result = Reflect.set(target, key, value, receiver);    
    callbacks.forEach(observe => observe());   
     return result;
   },
  get: function(target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
    }
  }
});
  //  一个可观察的对象
  const person = observable({name: 'liu', age: 18});
  function change() {    
    console.log(`${person.name} is ${person.age}`);
  }
  observe(change);
  person.age = 19;
  person.d;