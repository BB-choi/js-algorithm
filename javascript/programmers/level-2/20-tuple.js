// 튜플
// https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  const arr = s
    .replace(/[^0-9},]/g, "")
    .slice(0, -2)
    .split("},")
    .map((el) => el.split(",").map(Number));

  arr.sort((a, b) => a.length - b.length);
  const answer = [];

  answer.push(arr[0]);
  arr.forEach((el, idx) => {
    if (idx > 0) {
      answer.push(el.filter((cur) => !arr[idx - 1].includes(cur)));
    }
  });
  return answer.map((el) => Number(el.join("")));
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));
console.log(solution("{{123}}"));
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
