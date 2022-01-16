// function solution(test) {
//     let answer = 0;
//     m = test.length;
//     n = test[0].length;
//     console.log(m, n);
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             let cnt = 0;
//             for (let k = 0; k < m; k++) {
//                 let pi = (pj = 0);
//                 for (let s = 0; s < n; s++) {
//                     if (test[k][s] === i) pi = s;
//                     if (test[k][s] === j) pj = s;
//                 }
//                 if (pi < pj) cnt++;
//             }
//             if (cnt === m) answer++;
//         }
//     }
//     return answer;
// }

function solution(arr) {
    let answer = 0;
    let [N, M] = [arr[0].length, arr.length];

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            if (i === j) continue;
            let cnt = 0;
            for (let test = 0; test < M; test++) {
                if (arr[test].indexOf(i) < arr[test].indexOf(j)) {
                    cnt++;
                }
            }
            if (cnt === M) {
                answer++;
            }
        }
    }
    return answer;
}

let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];
arr =
    "19 15 4 17 12 18 6 3 11 14 1 8 13 9 2 20 5 16 10 7\n5 20 18 17 14 11 19 3 10 16 6 8 13 9 2 12 4 7 1 15"
        .split("\n")
        .map((el) => el.split(" ").map(Number)); // answer = 90

arr = [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
]; // answer = 0
console.log(solution(arr));
