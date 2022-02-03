// 3진법 뒤집기
// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    var answer = 0;
    let reversed = n.toString(3).split("").reverse().join("");
    answer = parseInt(reversed, 3);

    return answer;
}

function newSolution(n) {
    let answer = [];
    while (n !== 0) {
        answer.unshift(n % 3);
        n = Math.floor(n / 3);
    }

    return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}
console.log(solution(45));
console.log(solution(125));
console.log(newSolution(45));
console.log(newSolution(125));
