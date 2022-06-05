// 상근날드
// https://www.acmicpc.net/problem/5543

let path = "input.txt";
// path = "/dev/stdin";

const [s, j, h, coke, cider] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const selectedBurger = Math.min(s, j, h);
const selectedDrink = Math.min(coke, cider);

console.log(selectedBurger + selectedDrink - 50);
