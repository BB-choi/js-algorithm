// 704. Binary Search
// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = 0;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (target === nums[mid]) return mid;
        if (target > nums[mid]) start = mid + 1;
        if (target < nums[mid]) end = mid - 1;
    }
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
