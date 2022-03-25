// 136. Single Number
// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(nums[i]) === i) {
      return nums[i];
    } else {
      nums.splice(nums.lastIndexOf(nums[i]), 1);
    }
  }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
