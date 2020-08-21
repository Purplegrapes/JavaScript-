Function.prototype.Mybind = function(context, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  const self = this;
  const finalFunc = function (...args2) {
    // 绑定函数使用new 操作符创建对象的情况
    if (this instanceof finalFunc) {
      return self.call(this, ...args, ...args2)
    }
    return self.call(context, ...args, ...args2)
  }
  const func = function () {

  }
  func.prototype = this.prototype;
  finalFunc.prototype = new func();
  return finalFunc

}