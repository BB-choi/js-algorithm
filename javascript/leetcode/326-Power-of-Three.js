// 326. Power of Three
// https://leetcode.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return n > 0 && Math.pow(3, 19) % n === 0;
};
