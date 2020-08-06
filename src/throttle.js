// 节流 连续触发函数n秒内只执行一次
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
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