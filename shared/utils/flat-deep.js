const flatDeep = (array) => {
  console.log(array)
  return array.reduce((pre, cur) => {
    return Array.isArray(cur) ? pre.concat(flatDeep(cur)) : pre.concat(cur);
  }, [])
}

console.log(flatDeep([2, [3, [4, 2]]]))