//继承
// 原型链继承 将子类的prototype设置为父类的实例，父类方法可以复用 子类构建实例时不能向父类传递参数
// 缺点 -引用属性会被所有实例共享
//父类
function Parent(name) {
  this.name = name;
  this.age = 23;
  this.colors = ['red', 'green']
}
//子类
function Son() {
  this.color = 'green'
}

//构造函数继承 引用属性不会被共享， 但是父类的方法也没法共享
// 引用属性不会被共享，构造函数解决了引用类型被所有实例共享的问题,但正是因为解决了这个问题,导致一个很矛盾的问题出现了,--函数也是引用类型,
// 也没办法共享了
Son.prototype = new Parent();


function Parent1(age) {
  this.age = age;
  this.color = ['blue', 'red']
}

function Student1(age) {
  Parent1.call(this, age)
}

const son1 = new Student1(12)
son1.color.push('pink')
const son2 = new Student1(2)

console.log(son2)
console.log(son1);

//组合继承
function SuperType() {
  this.name = 'parent';
  this.arr = [1, 2, 3];
}

SuperType.prototype.say = function() { 
  console.log('this is parent')
}

function SubType() {
  SuperType.call(this) // 第二次调用SuperType
}

SubType.prototype = new SuperType() // 第一次调用SuperType

// es6
class A {
  func1() {
    this.name = 'name'
  }
}

class B {
  func2() {
    this.age = 'age'
  }
}

Object.setPrototypeOf = function (obj, proto) {
  console.log(obj.__proto__)
  console.log(proto)
  obj.__proto__ = proto;
  return obj;
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);