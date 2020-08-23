let Person = {
  name: 'Tom',
  say() {
      console.log(this)
      console.log(this.name)
  }
}
Person1 = {
  name: 'Tom1'
}
//如果没有参数

Function.prototype.Mybind = function(context) {
  //返回一个绑定this的函数，我们需要在此保存this
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  console.log(this)
  let self = this
      // 可以支持柯里化传参，保存参数
  let arg = [...arguments].slice(1)
  console.log(arg)
      // 返回一个函数
  return function() {
      //同样因为支持柯里化形式传参我们需要再次获取存储参数
      let newArg = [...arguments]
      console.log(newArg)
          // 返回函数绑定this，传入两次保存的参数
          //考虑返回函数有返回值做了return
      return self.apply(context, arg.concat(newArg))
  }
}

// 搞定测试
let fn = Person.say.Mybind(Person1)
fn(23)
