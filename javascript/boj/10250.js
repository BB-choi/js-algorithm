let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "2\n6 12 10\n30 50 72".toString().trim().split("\n");
input.shift();
let len = input.length;

// input 배열 안에 들어있는 만큼 반복하여 출력한다
for (let i = 0; i < len; i++) {
    let arr = input[i].toString().trim().split(" ");
    arr = arr.map(Number);
    let [h, w, n] = [arr[0], arr[1], arr[2]];
    // count는 for 안에서 101, 201, 301... 증가하는 때마다 함께 증가
    let count = 0;
    // (x, y) 좌표
    for (let x = 1; x <= w; x++) {
        for (let y = 1; y <= h; y++) {
            count++;
            // count가 n과 같아지면 출력
            if (count === n) {
                console.log(
                    // string으로 만들어 주어야 (y = 1, x = 1)일 때 y + x = 2 가 아닌 "11"로 출력가능하므로 모두 toString()
                    // 1층 1호인 경우 "11"로 출력되므로 삼항연산자를 이용하여 0을 붙여줌
                    y.toString() +
                        `${
                            x.toString().length === 1
                                ? "0" + x.toString()
                                : x.toString()
                        }`
                );
                // count === n을 발견하고, 콘솔에 출력된 경우에는 반복문을 탈출한다
                break;
            }
        }
    }
}
