// 394. Decode String
// https://leetcode.com/problems/decode-string/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  let str = "";
  let cnt = "";

  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === "[") {
      stack.push(str);
      stack.push(cnt);

      str = "";
      cnt = "";

      continue;
    }

    if (s[i] === "]") {
      let poppedCnt = stack.pop();
      let poppedStr = stack.pop();

      str = poppedStr + str.repeat(poppedCnt);

      continue;
    }

    if (isNaN(s[i])) {
      str += s[i];
    }

    if (!isNaN(s[i])) {
      cnt += s[i];
    }
  }

  return str;
};

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));
