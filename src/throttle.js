// 节流 连续触发函数n秒内只执行一次
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */

 /**
  「节流throttle」，规定在一个单位时间内，只能触发一次函数。
   如果这个单位时间内触发多次函数，只有一次生效。场景👇
  scroll滚动事件，每隔特定描述执行回调函数input输入框，每个特定时间发送请求或是展开下拉列表，（防抖也可以）
  节流重在加锁「flag = false」
  */
function throttle(func, wait, type = 2) {
  if (type === 1) {
    let previous = 0;
    return function() {
      let context = this;
      let args = arguments;
      let now = new Date();
      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    }
  }
  if (type === 2) {
    let timer;
    return function() {
      let context = this;
      let args = arguments;
      if (!timer) {
        timer = setTimeout(() => {
          func.apply(context, args);
          timer = null;
        }, wait)
      }
    }
  }
}

export default throttle;