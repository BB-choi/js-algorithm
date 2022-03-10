// JadenCase 문자열 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  var answer = "";
  const arr = s.split(" ").map((el) => el.split(""));
  //   console.log(arr);
  for (let c of arr) {
    for (let i = 0; i < c.length; i++) {
      if (c[i] !== " ") {
        c[i] = c[i].toLowerCase();
        if (i === 0) {
          c[i] = c[i].toUpperCase();
        }
      }
    }
  }

  answer = arr.map((el) => el.join("")).join(" ");
  return answer;
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
console.log(solution("a a a a a a a a a a "));
