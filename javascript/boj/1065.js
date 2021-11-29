let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const chkNum = function (n) {
    let nLen = String(n).length;
    let nArr = n.toString().split("");
    nArr = nArr.map(Number);

    let diff = 0;
    let prevDiff = 0;
    for (let i = 0; i + 1 < nLen; i++) {
        diff = nArr[i] - nArr[i + 1];
        if (i > 0 && prevDiff !== diff) {
            return 0;
        }
        prevDiff = diff;
    }
    return 1;
};

let sum = 0;
for (let i = 1; i <= N; i++) {
    if (chkNum(i)) {
        sum++;
    }
}

console.log(sum);
