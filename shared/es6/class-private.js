// 私有属性
// 1.闭包 缺点实例之间会共享变量
const classA = (function() {
  let _x;
  class ClassA {
    constructor(x) {
      _x = x;
    }
    getValue() {
      return _x;
    }
  }
  return ClassA;
})();
// 2.Symbol

const classB = (function() {
  let _x = Symbol();
  class ClassA {
    constructor(x) {
      this[_x] = x;
    }
    getValue() {
      return this[_x];
    }
  }
  return ClassA;
})();
