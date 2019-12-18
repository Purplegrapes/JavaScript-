// 模拟new
// new 新建一个对象，新对象继承构造函数属性， this指针指向新对象，返回
function createObject(context, ...args) {
  // 新建一个对象
  var obj = {};
  //对象继承构造函数属性
  obj.__proto__ = context.prototype;
  // this指针指向新对象
  const result = context.apply(obj, args);
  // 如果构造函数有返回值就返回这个值
  if (result instanceof Object) {
    return result;
  }
  // else返回新对象
  return obj;

}
export default createObject;