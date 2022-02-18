// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length > 1) {
        for (let i = nums.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                let temp;
                if (nums[j] === 0) {
                    temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                }
            }
        }
    }
};

var moveZeroes = function (nums) {
    let idx = 0;
    if (nums.length > 1) {
        for (let num of nums) {
            if (num !== 0) {
                nums[idx++] = num;
            }
        }
    }

    for (let i = idx; i < nums.length; i++) {
        nums[i] = 0;
    }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
