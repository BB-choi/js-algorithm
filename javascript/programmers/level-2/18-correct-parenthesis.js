// 올바른 괄호
// https://programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  // if (s[0] === ")") return false;
  // const sArr = s.split("");
  // const len = s.length;

  // if (len % 2) return false;

  // if (
  //   sArr.filter((el) => el === "(").length !==
  //   sArr.filter((el) => el === ")").length
  // )
  //   return false;

  let cnt = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] === "(") cnt++;
    if (s[i] === ")") cnt--;

    if (cnt < 0) return false;
  }

  if (cnt) return false;

  return true;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
