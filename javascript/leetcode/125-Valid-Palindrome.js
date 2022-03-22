// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let newS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let [start, end] = [0, newS.length - 1];
  if (!newS.length) {
    return true;
  }
  while (start <= end) {
    if (newS[start] !== newS[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("aa"));
console.log(isPalindrome("0P"));
