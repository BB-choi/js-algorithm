// 소수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/42839

const isPrime = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (!(num % i)) {
      return false;
    }
  }

  return num > 1;
};

function solution(numbers) {
  let answer = 0;

  const nums = numbers.split("");
  const len = numbers.length;

  const pNums = [];
  const p = Array.from({ length: len }, () => null);
  const checked = Array.from({ length: len }, () => 0);

  function DFS(L, maxLen) {
    if (L === maxLen) {
      pNums.push(Number([...p].join("")));
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!checked[i]) {
        checked[i] = 1;
        p[L] = nums[i];
        DFS(L + 1, maxLen);
        checked[i] = 0;
      }
    }
  }

  for (let i = 1; i <= len; i++) {
    DFS(0, i);
  }

  answer = [...new Set(pNums)].filter((el) => isPrime(el)).length;
  return answer;
}

console.log(solution("17"));
console.log(solution("011"));
console.log(solution("1231"));
