function getTarget(target, array) {
   let result = false;
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
         if (target === array[i][j]) {
            result = true;
         }
      }
   }
   return result;
}
const array = [
   [1, 2],
   [3, 4],
];
getTarget(2, array);

