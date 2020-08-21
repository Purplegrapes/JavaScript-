const flatDeep = (array, deep = 2) => {
  if (deep > 0) {
    return array.reduce((pre, cur) => {
      if (Array.isArray(cur)) {
        return [...pre, ...flatDeep(cur, deep - 1)]
      }
      return [...pre, cur];
    }, [])
  }
  return array.slice();
}
var s = flatDeep([2, [2, [3, 4]], 4])
console.log(s)