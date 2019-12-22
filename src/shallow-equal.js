const hasOwnProperty = Object.prototype.hasOwnProperty;
//声明is方法，兼容老浏览器
function is(x, y) {
  if (x === y) {
    //如果 x 严格等于 y，这里面有一种情况是需要特别注意的，就是-0===+0也是true
    //所以额外判断下两个参数是否有等于0的情况，-0 ！== 0 返回false
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // 如果两者不严格相等，也有中情况是需要额外处理的，就是NaN ===  NaN是返回false的
    // 所以特殊处理下，如果x严格不等于自己，y也严格不等于自己，则说明两者是NaN，这时候就要返回true
    return x !== x && y !== y;
  }
}

export const shallowEqual = function(objA, objB) {
  //判断objA和objB是否相等，相等直接返回true
  if (is(objA, objB)) {
    return true;
  }
  /*
  	如果不相等，那么就要看下两参数是否是对象（Object.is只能对基本类型数据做比较精准的比较）。
  	浅比较需要进入到对象的第一层，不能仅引用不一样就直接返回false。
  	此外，如果两者有一个参数为null，那也不用继续下去了，两者已经不相等了，并且有一个为null，则
  	表示肯定有变化发生了，shallowEqual可以直接返回false
  */
  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }
  //如果是对象，同时两者又没有null，则开始进入到对象的第一层来比较
  //获取两个对象的key值组成数组
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  //如果属性长度都不一样，则表示两者不相等，返回false
  if (keysA.length !== keysB.length) {
    return false;
  }

  //接下来一个属性一个属性的比较
  //如果objA的属性objB没有，或者两者同一个属性的值不相等，则表示objA和objB不相等，返回false
  for (let i = 0; i < keysA.length; i++) {
    if (
      !hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}