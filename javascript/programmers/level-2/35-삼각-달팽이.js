// 삼각 달팽이
// https://programmers.co.kr/learn/courses/30/lessons/68645

function solution(n) {
  const answer = [];
  // 최대값, length
  let max = 0;
  for (let i = 1; i <= n; i++) {
    max += i;
  }

  for (let i = 0; i < n; i++) {
    answer[i] = Array.from({ length: i + 1 }, () => 0);
  }

  for (let i = 1; i <= n; i++) {
    answer[i - 1][0] = i;
  }

  let cur;
  for (let i = 0; i < n; i++) {
    answer[n - 1][i] = i + n;
    cur = i + n;
  }

  let 채워진라인 = n - 1;
  let 채워야하는라인시작 = 1;
  let 반복횟수 = 0;
  cur++;

  while (cur <= max) {
    반복횟수++;

    // 맨뒤 채우기
    for (let i = 채워진라인 - 1; i >= 채워야하는라인시작; i--) {
      if (cur > max) {
        break;
      }
      if (answer[i][answer[i].length - 반복횟수]) {
        continue;
      }
      answer[i][answer[i].length - 반복횟수] = cur++;
    }

    // 맨앞채우기
    for (let i = 채워야하는라인시작; i < 채워진라인; i++) {
      if (cur > max) {
        break;
      }
      if (answer[i][반복횟수]) {
        continue;
      }
      answer[i][반복횟수] = cur++;
    }

    // 채워진라인을 추가하기(cur를 다 넣어주기)
    for (let i = 0; i < answer[채워진라인 - 1].length; i++) {
      if (cur > max) {
        break;
      }
      if (answer[채워진라인 - 1][i]) {
        continue;
      }
      answer[채워진라인 - 1][i] = cur++;
    }

    채워진라인--;
    채워야하는라인시작++;
  }

  return answer.join(",").split(",").map(Number);
  // return answer;
}

// console.log(solution(4));
// console.log(solution(5));
// console.log(solution(6));
console.log(solution(7));
