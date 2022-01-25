// 두 정수 사이의 합
// https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    let answer = 0;
    // let small = a;
    // let big = b;
    // if (a > b) {
    //     small = b;
    //     big = a;
    // }
    let small = Math.min(a, b);
    let big = Math.max(a, b);

    // 배열 만들어서 하기
    let arr = Array.from({ length: big - small + 1 }, (_, i) => small + i);
    answer = arr.reduce((a, b) => a + b);

    // small을 big까지 키워가면서 answer에 더하기
    /* while (small <= big) {
        answer += small;
        small++;
    } */

    return answer;
}

function newSolution(a, b) {
    return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));

console.log(newSolution(3, 5));
console.log(newSolution(3, 3));
console.log(newSolution(5, 3));
