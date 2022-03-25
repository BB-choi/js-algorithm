// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const len = s.length;

  for (let i = 0; i < len; i++) {
    if (stack.length) {
      if (stack[stack.length - 1] === "(" && s[i] === ")") {
        stack.pop();
        continue;
      }
      if (stack[stack.length - 1] === "[" && s[i] === "]") {
        stack.pop();
        continue;
      }
      if (stack[stack.length - 1] === "{" && s[i] === "}") {
        stack.pop();
        continue;
      }
    }
    stack.push(s[i]);
  }

  if (stack.length) return false;
  return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
