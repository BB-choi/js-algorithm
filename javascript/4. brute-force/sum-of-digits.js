function solution(n, arr) {
    let answer;
    let arrLen = arr.length;
    let sumNums = [];

    arr.sort((a, b) => b - a);
    for (let i = 0; i < arrLen; i++) {
        let temp = arr[i];
        let sum = 0;
        while (temp) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        sumNums.push(sum);
    }
    answer = arr[sumNums.indexOf(Math.max(...sumNums))];

    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
