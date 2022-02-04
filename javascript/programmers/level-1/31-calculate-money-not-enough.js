// 부족한 금액 계산하기
// https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    var answer = -1;
    let total = 0;

    for (let i = 1; i <= count; i++) {
        total += i * price;
    }
    if (money >= total) return 0;
    answer = total - money;
    return answer;
}

console.log(solution(3, 20, 4));
console.log(solution(1, 10000, 10));
