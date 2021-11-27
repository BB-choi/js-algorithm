let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

// (a / b)
// a 분자는 1 12321 123454321 .... 홀수만큼 증가한뒤 감소 (반복)
// b 분모는 121 1234321 12345654321 .... 짝수만큼 증가한 뒤 감소 (반복)

// n = 4;
// n = Number("1  ".toString().trim());

// 배열로 하면 메모리초과
// let a = [];
// let b = [];
// a[0] = 0;
// b[0] = 0;

let a = 0;
let b = 0;
let cnt = 0;
let i = 0;
while (i >= 0) {
    i++;
    for (let j = 1; j <= 2 * i - 1; j++) {
        a = j;
        cnt++;
        if (cnt == n) break;
        // a += j.toString();
    }
    if (cnt !== n) {
        for (let k = 2 * i - 2; k >= 1; k--) {
            // a.push(k);
            a = k;
            cnt++;
            if (cnt == n) break;
        }
    }
    if (cnt >= n) break;
}

i = 0;
cnt = 0;
while (i >= 0) {
    i++;
    for (let j = 1; j <= 2 * i; j++) {
        b = j;
        cnt++;
        if (cnt == n) break;
        // b += j.toString();
    }
    if (cnt !== n) {
        for (let k = 2 * i - 1; k >= 1; k--) {
            // b.push(k);
            b = k;
            cnt++;
            // b += k.toString();
            if (cnt == n) break;
        }
    }
    if (cnt >= n) break;
}

console.log(`${a}/${b}`);

// 1000만 2844/1629
// 900만 3647 / 597
