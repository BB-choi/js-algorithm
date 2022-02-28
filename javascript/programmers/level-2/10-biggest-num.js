// 가장 큰 수
// https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
    var answer = "";

    let strNum = numbers.map(String);
    answer = strNum.sort((a, b) => b + a - (a + b)).join("");
    console.log(answer);
    answer = answer[0] === "0" ? "0" : answer;
    return answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
