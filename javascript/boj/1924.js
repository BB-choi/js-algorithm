let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

// let input = ["12", "25"];
let arr = input.map(Number);

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let month = arr[0];
let day = arr[1];

let answer = new Date(
    `2007-${month.length > 1 ? month : "0" + month.toString()}-${
        day.length > 1 ? day : "0" + day.toString()
    }`
).getDay();

console.log(days[answer]);
