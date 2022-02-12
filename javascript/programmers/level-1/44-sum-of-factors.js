// 약수의 합
// https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
    var answer = 0;

    // for (let i = 1; i <= n / 2; i++) {
    //     if (n % i === 0) {
    //         answer += i;
    //     }
    // }

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            answer += i;
            // 4와 같이 같은 숫자(2, 2)가 두번 더해질 수 있는 경우를 피한다.
            if (Math.floor(n / i) !== i) answer += Math.floor(n / i);
        }
    }
    return answer;
}

console.log(solution(12));
console.log(solution(5));
