// 冒泡排序 外层遍历数组长度， 内层遍历数组长度减去外层的index，经历一次内层遍历就可以确定一个值得位置，下次可以减少一次内层遍历
function bubbleSort(arr) {
  let time = 0;
  for (let outer = 0; outer < arr.length; outer++) {
    time++
    for (let inner = 0; inner < arr.length - outer; inner ++) {
      time++
      if (arr[inner] > arr[inner+1]) {
        [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]]
      }
    }
  }
  return [arr, time];
}

// 选择排序 先确定最大的，后面依次遍历次数依次递减
function selectSort(arr) {
  let time = 0;

  for (let outer = 0; outer < arr.length - 1; outer++) {
    time++;
    for (let inner = outer + 1; inner < arr.length; inner ++) {
    time++;
      if (arr[outer] > arr[inner]) {
        [arr[inner], arr[outer]] = [arr[outer], arr[inner]]
      }
    }
  }
  return [arr, time];
}

// 插入排序 只和前面的有序比
function insertSort(arr) {
  let time = 0;
  for (let outer = 1; outer < arr.length; outer++) {
    time++;
    for (let inner = outer; inner > 0; inner--) {
    time++;
      if (arr[inner] < arr[inner - 1]) {
        [arr[inner], arr[inner - 1]] = [arr[inner - 1], arr[inner]]
      } else {
        break;
    }
    }
  }
  return [arr, time];
}
// 快排，循环递归
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let left = [];
  let right = [];
  let current = arr.splice(0, 1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(current, quickSort(right))
}
function cStairs(n) {
  if(n === 1 || n === 2) {
      return 1;
  } else {
      return cStairs(n-1) + cStairs(n-2)
  }
}
console.log(cStairs(4))
