// 구명보트
// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  var answer = 0;
  const totalPeople = people.length;

  people.sort((a, b) => a - b);

  let f = 0;
  let e = totalPeople - 1;

  while (f < e) {
    if (people[f] + people[e] <= limit) {
      f++;
      e--;
    } else {
      e--;
    }
    answer++;
  }

  if (f === e) {
    answer++;
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
