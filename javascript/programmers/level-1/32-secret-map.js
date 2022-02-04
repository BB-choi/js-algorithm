// 비밀지도
// https://programmers.co.kr/learn/courses/30/lessons/17681

function toBin(n, num) {
    let bin = [];
    while (num) {
        bin.unshift(num % 2);
        num = Math.floor(num / 2);
    }

    while (bin.length < n) {
        bin.unshift(0);
    }

    return bin;
}

function solution(n, arr1, arr2) {
    var answer = [];

    for (let i = 0; i < n; i++) {
        let cur1 = toBin(n, arr1[i]);
        let cur2 = toBin(n, arr2[i]);
        answer[i] = [];
        for (let j = 0; j < n; j++) {
            if (cur1[j] === cur2[j]) {
                answer[i][j] = cur1[j] === 1 ? "#" : " ";
            } else if (cur1[j] === 1 || cur2[j] === 1) {
                answer[i][j] = "#";
            } else {
                answer[i][j] = " ";
            }
        }
        answer[i] = answer[i].join("");
    }

    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
