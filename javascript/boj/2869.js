let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

// input = ["2", "1", "5"];
// let input = ["100", "99", "1000000000"];
let arr = input.map(Number);
const goal = arr[2];
const up = arr[0];
const down = arr[1];
let days = 0;
/* 
// 시간 초과
let total = 0;
while (true) {
    days++;
    total += up;
    if (total < goal) {
        total -= down;
    } else {
        break;
    }
} */
days = Math.ceil((goal - down) / (up - down));
console.log(days);
