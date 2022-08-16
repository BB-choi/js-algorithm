// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;
  return nums.map((el) => {
    sum += el;
    return sum;
  });
};

console.log(runningSum([1, 2, 3, 4]));
