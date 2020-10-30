// L 表示左表达式，R 表示右表达式
function instance_of(L, R) {
  var O = R.prototype;
  let l = L.__proto__;
  while (true) {
    if (L === null) return false;
    // 这里重点：当 O 严格等于 L 时，返回 true
    if (O === L) return true;
    l = l.__proto__;
  }
}

const s = {

}
console.log(instance_of(s, Object))