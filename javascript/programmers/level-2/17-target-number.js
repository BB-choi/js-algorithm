// 타겟 넘버
// https://programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0;

  function find(idx, sum) {
    if (idx === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    // -선택
    find(idx + 1, sum + numbers[idx]);
    // +선택
    find(idx + 1, sum - numbers[idx]);
  }

  find(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
