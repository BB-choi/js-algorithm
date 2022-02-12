// 수박수박수박수박수박수?
// https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
    var answer = "";
    let str = "수박";

    let idx = 0;
    while (n) {
        answer += str[idx++ % 2];
        n--;
    }
    return answer;
}

console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
