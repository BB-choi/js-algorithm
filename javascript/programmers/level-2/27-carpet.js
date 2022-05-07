// 카펫
// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  let answer = [];

  let dp = [];
  dp[8] = [[3, 3]];
  if (brown > 8) {
    for (let i = 10; i <= brown; i = i + 2) {
      dp[i] = [];
      dp[i - 2].forEach((el) => {
        if (el[0] - el[1] === 1) {
          dp[i].push([el[0], el[0]]);
        }
        dp[i].push([el[0] + 1, el[1]]);
      });
    }
  }

  for (let i = 0; i < dp[brown].length; i++) {
    const [garo, sero] = dp[brown][i];
    const curInner = (garo - 2) * (sero - 2);
    if (curInner === yellow) {
      answer = [garo, sero];
      break;
    }
  }

  return answer;
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
