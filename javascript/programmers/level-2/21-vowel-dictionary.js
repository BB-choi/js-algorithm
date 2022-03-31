// 모음 사전
// https://programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  let answer = 0;
  const nums = [1];
  const order = ["A", "E", "I", "O", "U"];

  while (nums.length < 5) {
    nums.unshift(nums[0] * 5 + 1); // [781, 156, 31, 6, 1]
  }

  for (let i = 0; i < word.length; i++) {
    const cur = order.indexOf(word[i]);
    answer += cur * nums[i];
    answer++;
  }

  return answer;
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));

// reference
// https://velog.io/@gkak1121/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AA%A8%EC%9D%8C%EC%82%AC%EC%A0%84
