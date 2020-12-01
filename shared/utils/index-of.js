const myIndexOf = (arr, target, fromInd) => {
  for (i = 0 || fromInd; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;

}