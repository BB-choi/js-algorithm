// 영어 끝말잇기
// https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  let answer = [];

  const 나온말 = {};
  const 차례 = {};

  let before = "";
  for (let i = 0; i < words.length; i++) {
    let 사람번호 = (i + 1) % n;

    if (!사람번호) {
      사람번호 = n;
    }

    if (!차례[사람번호]) {
      차례[사람번호] = 1;
    } else {
      차례[사람번호] = 차례[사람번호] + 1;
    }

    if (before) {
      if (before !== words[i][0]) {
        answer = [사람번호, 차례[사람번호]];
        break;
      }
    }

    before = words[i][words[i].length - 1];

    if (!나온말[words[i]]) {
      나온말[words[i]] = 1;
    } else {
      answer = [사람번호, 차례[사람번호]];
      break;
    }
  }

  if (!answer.length) {
    answer = [0, 0];
  }

  return answer;
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
