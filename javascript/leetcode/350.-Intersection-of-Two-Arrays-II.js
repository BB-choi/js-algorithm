// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let answer = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] < 0 || nums2[j] < 0) continue;
      if (nums1[i] === nums2[j]) {
        answer.push(nums1[i]);
        nums2[j] = -1;
        nums1[i] = -1;
      }
    }
  }

  return answer;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
