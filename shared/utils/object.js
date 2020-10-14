function _create(prototype) {
  let obj = {};
  obj.__proto__ = prototype;
  return obj;

}


export default _create;