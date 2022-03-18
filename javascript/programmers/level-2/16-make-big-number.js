// 큰 수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  let answer = "";
  let arr = [];
  const maxLength = number.length - k;

  let idx = 0;
  arr.push(number[idx]);
  idx++;

  while (idx < number.length) {
    while (k && arr.length && arr[arr.length - 1] < number[idx]) {
      arr.pop();
      k--;
    }
    arr.push(number[idx]);
    idx++;
  }

  answer = arr.slice(0, maxLength).join(""); // k가 0으로 되지 않았을 경우(pop()횟수가 k번 수행되지 않음) 고려

  return answer;
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));

// reference
// https://gurumee92.tistory.com/162
