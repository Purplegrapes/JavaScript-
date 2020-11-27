import throttle from './throttle';
const isIn = (el) => {
  const bound = el.getBoundingClientRect();
  const clientHeight = window.innerHeight;
  return bound.top <= clientHeight + 100;
}
const lazyLoad = () => {
  const imgs = document.querySelectorAll('img');
  Array.from(imgs).forEach((img) => {
    if (isIn(img) && !img.src) {
      img.src = img.dataset.src;
    }
  })
}
window.onscroll = throttle(lazyLoad, 200);