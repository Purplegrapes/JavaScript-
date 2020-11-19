class Observal {
  static callbacks = new Set();
  static observe(callback) {
    this.callbacks.add(callback);
  }
  static observable(obj) {
    return new Proxy(obj, {
      get: function(target, propKey) {
        if (propKey in target) {
          return target[propKey];
        } else {
          throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
        }
      },
      set: (target, key, value, receiver) => {
        const result = Reflect.set(target, key, value, receiver);
        this.callbacks.forEach(observe => observe());
        return result;
      },
    })
  }
}
const person = Observal.observable({
  name: 'person',
  age: 10,
});
const person2 = Observal.observable({
  name: 'person2',
  age: 1,
});
Observal.observe(() => {
  console.log(`${person.name}-${person.age}`)
})
Observal.observe(() => {
  console.log(`${person2.name}-${person2.age}`)
})
person.age = 14;
person2.age = 14;

// 双向数据绑定

const targetObj = {};

const data = new Proxy({}, {
  set: (target, key, value, receiver) => {
    const result = Reflect.set(target, key, value, receiver);
    console.log(result)
    targetObj[key] = value;
    return result;
  }
});
data.text = 'd';
console.log(data)
console.log(targetObj)



