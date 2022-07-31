// 암호화된 비밀번호
// https://www.acmicpc.net/problem/9549

let path = "input.txt";
// path = "/dev/stdin";

let [n, ...strs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

n = Number(n) * 2;

const createObj = () => {
  const a = "a".charCodeAt();
  const z = "z".charCodeAt();

  let count = z - a + 1;
  let current = a;
  const result = {};
  for (let i = 0; i < count; i++) {
    result[String.fromCharCode(current)] = 0;
    current++;
  }

  return result;
};

const countChar = (str) => {
  const len = str.length;
  const result = createObj();

  for (let i = 0; i < len; i++) {
    const current = str[i];
    result[current] = result[current] + 1;
  }

  return result;
};

let answer = "";
for (let i = 0; i < n; i += 2) {
  const result = strs[i];
  const original = strs[i + 1];

  const originCount = countChar(original);
  const resultLen = result.length;
  const originalLen = original.length;

  let flag = false;
  let wordCount;

  for (let j = 0; j < resultLen; j++) {
    if (!wordCount) {
      wordCount = countChar(result.slice(j, j + originalLen));
    } else {
      wordCount[result[j - 1]] = wordCount[result[j - 1]] - 1;
      wordCount[result[j + originalLen - 1]] =
        wordCount[result[j + originalLen - 1]] + 1;
    }

    for (const key in originCount) {
      if (!originCount[key]) {
        continue;
      }
      if (originCount[key] !== wordCount[key]) {
        flag = false;
        break;
      }
      flag = true;
    }

    if (flag) {
      break;
    }
  }

  if (flag) {
    answer += "YES\n";
  } else {
    answer += "NO\n";
  }
}

console.log(answer);
