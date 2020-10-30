function Shape() {
    this.x = 0;
    this.y = 0;
  }
  
  // 父类的方法
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  };
  
  // Rectangle - 子类(subclass)
  function Rectangle() {
    Shape.call(this); // call super constructor.
  }
  
  // 子类续承父类
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;
  
  var rect = new Rectangle();
  // class继承 首先调用父类的构造函数，然后继承父类的原型，再把构造函数指向自己