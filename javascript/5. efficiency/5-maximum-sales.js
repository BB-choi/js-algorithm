function solution(k, arr) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length - k; i++) {
        let count = k - 1;
        let sum = arr[i];
        while (count) {
            sum += arr[i + count];
            count--;
        }
        max = Math.max(sum, max);
    }
    answer = max;
    return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
