let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(/[ |\n]/);

// let input = "5 21\n5 6 7 8 9";
let arr = input;

let target = arr[1];
let arrLen = arr.length;
let cards = [];
let max = 0;

for (let i = 2; i < arrLen; i++) {
    cards.push(arr[i]);
}
cards = cards.map(Number);

arrLen = cards.length;
for (let i = 0; i < arrLen; i++) {
    for (let k = i + 1; k < arrLen; k++) {
        for (let j = k + 1; j < arrLen; j++) {
            if (
                cards[i] + cards[j] + cards[k] <= target &&
                cards[i] + cards[j] + cards[k] >= max
            ) {
                max = cards[i] + cards[j] + cards[k];
            }
        }
    }
}
console.log(max);
