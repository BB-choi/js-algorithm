// カードの並び替え
// https://www.acmicpc.net/problem/5599

let path = "input.txt";
// path = "/dev/stdin";

const [n, m, ...방법] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const cardCounts = n * 2;
let cards = Array.from({ length: cardCounts }, (_, i) => i + 1);

const suffle = (arr) => {
  const A = arr.slice(0, n);
  const B = arr.slice(n, cardCounts);
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(A[i]);
    result.push(B[i]);
  }
  return result;
};

const cut = (arr, K) => {
  const A = arr.slice(0, K);
  const B = arr.slice(K, cardCounts);

  return B.concat(A);
};

for (let i = 0; i < m; i++) {
  if (방법[i] === 0) {
    cards = suffle(cards);
    continue;
  } else {
    cards = cut(cards, 방법[i]);
  }
}

console.log(cards.join("\n"));
