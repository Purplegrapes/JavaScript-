// 模拟new
// new 新建一个对象，新对象继承构造函数属性， this指针指向新对象，返回
function Parent(name) {
  this.name = name;
  return 3;
}
function createObject(context, ...args) {
  // 使用现有的对象来提供新创建的对象的__proto__
  var obj = Object.create(context.prototype);
  // this指针指向新对象
  const result = context.apply(obj, args);
  // 如果构造函数有返回值就返回这个值
  if (result instanceof Object) {
    return result;
  }
  // else返回新对象
  return obj;

}
const son = createObject(Parent)
export default createObject;