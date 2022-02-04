// 텀 프로젝트
// https://www.acmicpc.net/problem/9466

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
const T = Number(input[0]);
for (let i = 1; i <= T * 2; i += 2) {
    const n = Number(input[i]);
    // let visited = Array(n + 1).fill(0);
    let state = Array(n + 1).fill(0);
    let s = input[i + 1].split(" ").map(Number);
    s.unshift(0);
    let cnt = 0;
    let CYCLE_IN = -1;

    // for (let j = 0; j < n; j++) {
    //     if (!visited[j]) {
    //         let cur = j;
    //         visited[cur] = 1;
    //         for (let k = 0; k < n; k++) {
    //             cur = s[cur];
    //             if (cur === j) {
    //                 cnt++;
    //                 break;
    //             }
    //         }
    //     }
    // }
    // console.log(n - cnt);

    const run = (v) => {
        let cur = v;
        while (1) {
            state[cur] = v;
            cur = s[cur];

            if (state[cur] === v) {
                while (state[cur] !== CYCLE_IN) {
                    state[cur] = CYCLE_IN;
                    cur = s[cur];
                }
                return;
            } else if (state[cur] !== 0) return;
        }
    };

    for (let j = 1; j <= n; j++) {
        if (!state[j]) run(j);
    }

    for (let j = 1; j <= n; j++) {
        if (state[j] !== CYCLE_IN) cnt++;
    }
    console.log(cnt);
}

// reference
// https://blog.encrypted.gg/499
