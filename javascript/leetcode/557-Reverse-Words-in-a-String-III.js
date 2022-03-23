// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  return s
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
};

console.log(reverseWords("God Ding"));
console.log(reverseWords("Let's take LeetCode contest"));
