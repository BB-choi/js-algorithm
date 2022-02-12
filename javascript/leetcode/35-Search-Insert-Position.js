// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let first = 0;
    let last = nums.length - 1;
    let mid = 0;

    while (first <= last) {
        mid = Math.floor(first + (last - first) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            last = mid;
        } else if (nums[mid] < target) {
            first = mid + 1;
        }
    }
    return last + 1;
};

// reference
// https://leetcode.com/problems/search-insert-position/discuss/249092/Come-on-forget-the-binary-search-patterntemplate!-Try-understand-it!
var searchInsert2 = function (nums, target) {
    let first = 0;
    let last = nums.length - 1;
    let mid = 0;

    while (first < last) {
        mid = Math.floor(first + (last - first) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            last = mid;
        } else if (nums[mid] < target) {
            first = mid + 1;
        }
    }
    return nums[last] < target ? last + 1 : last;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
