function deepCopy(obj){
  //判断是否是简单数据类型，
  let result = obj;
  if(typeof obj == "object"){
      //复杂数据类型
      result = obj.constructor == Array ? [] : {};
      for(let i in obj){
          result[i] = deepCopy(obj[i]);
      }
  }
  return result;
}
export default deepCopy;