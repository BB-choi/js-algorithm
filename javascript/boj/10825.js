// 10825 - 국영수

let path = "/dev/stdin";
// let path = "input.txt";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
let [N, ...students] = input;
N = +N;
// students = students.map((el) => el.split(" "));

// for (let i = 0; i < N; i++) {
//     // 국어
//     students[i][1] = Number(students[i][1]);
//     // 영어
//     students[i][2] = Number(students[i][2]);
//     // 수학
//     students[i][3] = Number(students[i][3]);
// }

students = students.map((el) => el.split(" ").map((el) => Number(el) || el));

students.sort((a, b) => {
    if (a[1] < b[1]) {
        // 1. 국어 점수가 감소하는 순서로 (내림차순)
        return 1;
    } else if (a[1] > b[1]) {
        return -1;
    } else {
        if (a[2] > b[2]) {
            // 2. 국어 점수가 같으면 영어 점수가 증가하는 순서로 (오름차순)
            return 1;
        } else if (a[2] < b[2]) {
            return -1;
        } else {
            // 3. 국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로(내림차순)
            if (a[3] < b[3]) {
                return 1;
            } else if (a[3] > b[3]) {
                return -1;
            } else {
                // 4. 아스키코드
                if (a[0] > b[0]) {
                    return 1;
                } else if (a[0] < b[0]) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }
    }
});

// console.log(students);
let ans = "";
for (let i = 0; i < N; i++) {
    ans += students[i][0] + "\n";
}

console.log(ans);
