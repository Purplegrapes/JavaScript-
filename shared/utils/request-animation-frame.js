const total = 100000
// 一次插入 20 条，如果觉得性能不好就减少
const once = 20
// 渲染数据总共需要几次
const loopCount = total / once;

export const insertData = (ulRef) => {
    let countOfRender = 0
    function add() {
      // 优化性能，插入不会造成回流
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < once; i++) {
        const li = document.createElement("li");
        li.innerText = Math.floor(Math.random() * total);
        fragment.appendChild(li);
      }
      ulRef.appendChild(fragment);
      countOfRender += 1;
      loop();
    }
    function loop() {
      if (countOfRender < loopCount) {
        console.log(countOfRender)
        window.requestAnimationFrame(add);
      }
    }
    loop();
  };
let timer;

export const runProgress = (animationRef) => {
    animationRef.style.width = '0';
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        if (parseInt(animationRef.style.width) < 500){
            animationRef.style.width = parseInt(animationRef.style.width) + 5 + 'px';
            animationRef.innerHTML = parseInt(animationRef.style.width) / 5 + '%';
            timer = requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }    
    });
  };

  export const slicing = () => {
    //requestAnimationFrame方法的作用为在屏幕刷新每一帧时执行一次回调函数
    const requestAnimationFrame =
        window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
    const cancelAnimationFrame =
        window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame
    //scrollNode为需要执行轮播动作的容器
    const scrollNode = document.getElementById("scorll");
    //单个轮播元素宽度
    const itemWidth = 1500
    //distance为轮播时容器的最大偏移距离（通常为容器的宽度减去第一个轮播元素的宽度）
    const distance = scrollNode.clientWidth
    //由于容器的定位为相对定位，则可以通过修改style的left来达到移动效果
    scrollNode.style.left = scrollNode.style.left || 0
    //容器的偏移距离保存在window对象的__offset属性中
    window.__offset = window.__offset || 0
    let requestId = null, sliceStatus = "start", wait = 0, waitMax = 60
        //每一帧执行的回调函数
        const scrollLeft = () => {
            if (window.__offset % itemWidth === 0 && wait < waitMax) {
                wait++;
            }
            else {
                if (window.__offset % itemWidth === 0 && wait === waitMax) {
                    wait = 0;
                }
                //轮播速度
                const speed = 2
                //刷新容器偏移距离
                window.__offset = window.__offset + speed
                //设置容器偏移距离
                scrollNode.style.left = -window.__offset + 'px'
            }
            /**
             * 当容器偏移距离达到最大偏移距离时，重置容器偏移距离，继续从头开始移动
             * 由于最后一个轮播元素是第一个轮播元素的复制，所以看起来就是无缝轮播的效果
             */
            if (distance <= window.__offset) window.__offset = 0
            //通过递归的方式循环调用
            requestId = requestAnimationFrame(scrollLeft)
        }
        requestId = requestAnimationFrame(scrollLeft)
        return (status) => {
          if (sliceStatus === status) return
          status === "start" ? requestId =
              requestAnimationFrame(scrollLeft) : cancelAnimationFrame(requestId)
          sliceStatus = status
      }
  }
  let slice = null
  export const start = () => slice === null ? slice = slicing() : slice("start")
  export const stop = () => slice("stop")