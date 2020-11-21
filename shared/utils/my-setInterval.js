class MySetInterval {
  constructor(func, a, b, timer) {
    this.time = 0;
    this.handle = null;
    this.func = func;
    this.a = a;
    this.b = b;
    this.timer = timer;
  }
  start() {
    this.handle = setTimeout(() => {
      this.func();
      this.time = this.time + 1;
      this.start();
      console.log(this.time)
      if (this.time > this.timer) {
        this.stop();
      }
    }, this.a + this.b * this.time);
  }
  stop() {
    clearTimeout(this.handle);
    console.log('清除定时')
    this.time = 0;
  }
}
const mySetInterval = new MySetInterval(() => {
  console.log(2)
}, 1000, 2000, 3);

mySetInterval.start();
