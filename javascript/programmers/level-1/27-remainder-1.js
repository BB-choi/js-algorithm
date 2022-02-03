// 나머지가 1이 되는 수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
    let x = 2;

    while (1) {
        if (n % x === 1) break;
        x++;
    }

    return x;
}

console.log(solution(10));
console.log(solution(12));
