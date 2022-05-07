// 피로도
// https://programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
  let answer = Number.MIN_SAFE_INTEGER;

  const len = dungeons.length;
  const caseArr = [];
  const p = [];
  const checked = Array.from({ length: len }, () => 0);

  function DFS(L) {
    if (L === len) {
      caseArr.push([...p]);
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!checked[i]) {
        checked[i] = 1;
        p[L] = i;
        DFS(L + 1);
        checked[i] = 0;
      }
    }
  }

  DFS(0);

  function checkDengeonCnt(arr) {
    let curK = k;
    let count = 0;
    const arrLen = arr.length;

    for (let i = 0; i < arrLen; i++) {
      const [minK, useK] = dungeons[arr[i]];
      if (curK < minK) {
        break;
      }

      curK = curK - useK;
      count++;
    }

    answer = Math.max(count, answer);
  }

  const caseLen = caseArr.length;
  for (let i = 0; i < caseLen; i++) {
    checkDengeonCnt(caseArr[i]);
  }

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
