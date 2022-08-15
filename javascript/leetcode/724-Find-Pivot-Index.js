// 724. Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let left = 0;
  let right = 0;
  let curIdx = 0;

  let len = nums.length;

  // 첫 합
  for (let i = 0; i < len; i++) {
    if (i === curIdx) {
      continue;
    }

    if (i < curIdx) {
      left += nums[i];
    }

    if (i > curIdx) {
      right += nums[i];
    }
  }

  while (left !== right && curIdx < len) {
    left += nums[curIdx];
    right -= nums[curIdx + 1];
    curIdx++;
  }

  if (left === right) {
    return curIdx;
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
