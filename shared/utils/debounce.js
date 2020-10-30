function debounce(func, wait) {
    let timer;
    return function() {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, arguments);
        }, wait);
    }
}
function throttle(func, wait) {
    let pre = 0;
    return function() {
        const now = new Date();
        if (now - pre >= wait) {
            func.apply(this, arguments);
            pre = now;
        }

    }

}

function s(name) {
    console.log(name);

}
debounce(s('ee'), 10000)