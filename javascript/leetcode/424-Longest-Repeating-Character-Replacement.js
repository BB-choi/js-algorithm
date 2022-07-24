// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const len = s.length;
  let left = 0,
    right = 0;
  let max = Number.MIN_SAFE_INTEGER;
  const check = {};

  while (right < len) {
    let cur = s[right];
    check[cur] = (check[cur] || 0) + 1;
    max = Math.max(check[cur], max);

    if (max + k < right - left + 1) {
      check[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("ABAA", 0));
console.log(characterReplacement("ABBB", 2));
