/* 
    「防抖debounce」,在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。场景👇
    浏览器窗口大小resize避免次数过于频繁
    登录，发短信等按钮避免发送多次请求
    文本编辑器实时保存
    防抖重在清零「clearTimeout(timer)」
*/
//* @desc 函数防抖
 //* @param func 函数
// * @param wait 延迟执行毫秒数
 //* @param immediate true 表立即执行，false 表非立即执行

 function debounce(func,wait,immediate) {
  let timeout;

  return function () {
      let context = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
          var callNow = !timeout;
          timeout = setTimeout(() => {
              timeout = null;
          }, wait)
          if (callNow) func.apply(context, args)
      }
      else {
          timeout = setTimeout(function(){
              func.apply(context, args)
          }, wait);
      }
  }
}
export default debounce;