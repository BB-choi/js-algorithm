// 374. Guess Number Higher or Lower
// https://leetcode.com/problems/guess-number-higher-or-lower/

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const ans = 6;
const guess = (n) => {
  if (n > ans) {
    return -1;
  }

  if (n < ans) {
    return 1;
  }

  if (n === ans) {
    return 0;
  }
};

var guessNumber = function (n) {
  let right = n;
  let left = 1;
  let mid = Math.floor((left + right) / 2);

  while (guess(mid) !== 0) {
    if (guess(mid) === 1) {
      left = mid + 1;
    }

    if (guess(mid) === -1) {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return mid;
};
