// 소수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12921

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(n) {
    var answer = 0;
    // while (n > 1) {
    //     if (isPrime(n--)) answer++;
    // }
    let arr = Array(n + 1).fill(1);
    for (let i = 2; i * i <= n; i++) {
        if (!arr[i]) continue;
        // 배수는 소수가 아님 false
        for (let j = i * i; j <= n; j += i) {
            arr[j] = 0;
        }
    }

    for (let i = 2; i <= n; i++) {
        if (arr[i]) answer++;
    }
    return answer;
}

console.time("test");
console.log(solution(1000000));
console.timeEnd("test");
console.log(solution(10));
console.log(solution(5));
