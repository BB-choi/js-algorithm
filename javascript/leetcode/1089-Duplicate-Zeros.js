// 1089. Duplicate Zeros
// https://leetcode.com/problems/duplicate-zeros/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (!arr[i]) {
      arr.splice(i, 0, 0);
      i++;
    }
  }
  arr.splice(len);
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
console.log(duplicateZeros([1, 2, 3]));
