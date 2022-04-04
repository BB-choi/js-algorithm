// 양궁대회
// https://programmers.co.kr/learn/courses/30/lessons/92342

function solution(n, info) {
  let queue = [];
  queue.push([0, Array(11).fill(0)]);
  let idx = 0;
  let maxGap = Number.MIN_SAFE_INTEGER;
  let maxGapArr = [];

  while (idx < queue.length) {
    let [look, curArr] = queue[idx];
    idx++;

    let cnt = 0;
    if (curArr.filter((el) => !!el).length) {
      cnt = curArr.filter((el) => !!el).reduce((a, b) => a + b);
    }

    if (cnt === n) {
      let lionSum = 0;
      let apeachSum = 0;
      for (let i = 0; i < 11; i++) {
        if (!curArr[i] && !info[i]) {
          continue;
        }

        if (curArr[i] > info[i]) {
          lionSum += 10 - i;
          continue;
        }
        apeachSum += 10 - i;
      }

      if (lionSum > apeachSum) {
        if (lionSum - apeachSum >= maxGap) {
          maxGap = lionSum - apeachSum;
          maxGapArr.push(curArr);
        }
      }

      continue;
    }

    if (cnt > n) {
      continue;
    }

    if (look === 10) {
      const cp = [...curArr];
      cp[look] = n - cnt;
      queue.push([11, cp]);
      continue;
    }

    const cpArr = [...curArr];
    cpArr[look] = info[look] + 1;
    queue.push([look + 1, cpArr]);

    const cpArr2 = [...curArr];
    cpArr2[look] = 0;
    queue.push([look + 1, cpArr2]);
  }

  if (maxGapArr.length === 1) {
    return maxGapArr[0];
  }
  if (!maxGapArr.length) {
    return [-1];
  }

  return maxGapArr[maxGapArr.length - 1];
}

/* 
info : 어피치가 맞힌 화살의 개수
10, 9, 8, ..., 0 순서
*/
console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));

// reference
// https://velog.io/@hygge/Python-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%96%91%EA%B6%81%EB%8C%80%ED%9A%8C-2022-KAKAO-BLIND-RECRUITMENT-BFS
