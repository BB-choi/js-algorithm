// 5397 - 키로거
// 실버3, 연결 리스트

// let input = require("fs")
//     .readFileSync("/dev/stdin")
//     .toString()
//     .trim()
//     .split("\n");
let input = require("fs")
    .readFileSync("input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input[0].trim());
let data,
    pre,
    nxt = [[], [], []];

let unused = 1;

function insert(addr, num) {
    data[unused] = num;
    pre[unused] = addr;
    nxt[unused] = nxt[addr];

    if (nxt[addr] !== -1) {
        pre[nxt[addr]] = unused;
    }
    nxt[addr] = unused;
    unused++;
}

function erase(addr) {
    nxt[pre[addr]] = nxt[addr];
    if (nxt[addr] !== -1) {
        pre[nxt[addr]] = pre[addr];
    }
}

function traverse() {
    let cur = nxt[0];
    let print = "";
    while (cur !== -1) {
        print += data[cur];
        cur = nxt[cur];
    }
    console.log(print);
}

for (let i = 1; i <= N; i++) {
    let keylog = input[i];
    let L = keylog.length;
    data = new Array(L);
    pre = new Array(L);
    nxt = new Array(L);

    unused = 1;
    pre.fill(-1);
    nxt.fill(-1);
    let cur = 0;
    for (let j = 0; j < L; j++) {
        if (keylog[j] === "<") {
            // if (pre[cur] !== 0)
            if (cur !== 0) cur--;
        } else if (keylog[j] === ">") {
            // if (nxt[cur] > -1)
            if (data[nxt[cur]] !== -1) {
                cur++;
            }
        } else if (keylog[j] === "-") {
            if (data[cur]) {
                erase(cur);
                cur--;
            }
        } else {
            insert(cur++, keylog[j]);
            // cur++;
        }
        console.log(cur);
    }
    traverse();
}

/* 
for (let i = 1; i <= N; i++) {
    let keylog = input[i];
    let L = keylog.length;
    // 커서 움직임에 따라 left, right 배열에 넣고, 빼고
    let left = [];
    let right = [];

    // let idx = 0;
    for (let j = 0; j < L; j++) {
        if (keylog[j] === "<") {
            if (left.length) {
                // 왼쪽으로 커서 이동시(이동 가능-left배열에 들어있는 것이 있을 경우) right로 보낸다
                right.push(left.pop());
            }
        } else if (keylog[j] === ">") {
            if (right.length) {
                // 오른쪽으로 커서 이동시(이동 가능 - right배열에 들어있는 것이 있을 경우) left로 보낸다
                // right는 반대방향으로 들어가므로 pop()으로 빼내고 마지막에 reverse().join("")
                left.push(right.pop());
            }
        } else if (keylog[j] === "-") {
            if (left.length) {
                left.pop();
            }
        } else {
            left.push(keylog[j]);
        }
        // console.log(left, right);
    }
    console.log(left.join("") + right.reverse().join(""));
}
 */
