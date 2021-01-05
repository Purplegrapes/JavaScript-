export const flatDeep = (array) => {
  return array.reduce((pre, cur) => {
    return Array.isArray(cur) ? pre.concat(flatDeep(cur)) : pre.concat(cur);
  }, [])
}