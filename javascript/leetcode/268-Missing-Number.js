/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const cnt = nums.length;
  let arr = [...new Array(cnt + 1).keys()];
  return arr.filter((el) => !nums.includes(el));
};

// reference
// https://chach4.tistory.com/11 증가하는 배열 만들기

// https://leetcode.com/problems/missing-number/discuss/255115
var missingNumber = function (nums) {
  let len = nums.length; //length of array.
  let sum = (len * (len + 1)) / 2; // sum of all nos from 0 to n by series formula 급수공식, 시그마공식
  let sum2 = nums.reduce((a, c) => a + c); //sum of array elements.
  return sum - sum2; //difference is the answer
};

var missingNumber = function (nums) {
  let sum = nums.length;
  for (let i = 0; i < nums.length; i++) {
    sum += i - nums[i];
  }

  return sum;
};

var missingNumber = function (nums) {
  var sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += i + 1 - nums[i];
  }

  return sum;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(
  missingNumber([
    45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
    4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34,
    30, 25, 47, 0, 31, 42, 24, 10, 14,
  ])
);
