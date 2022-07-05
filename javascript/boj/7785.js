// 회사에 있는 사람
// https://www.acmicpc.net/problem/7785

let path = "input.txt";
// path = "/dev/stdin"

let [n, ...records] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

const map = new Map();

for (let i = 0; i < +n; i++) {
  const [name, record] = records[i].split(" ");
  if (map.get(name)) {
    map.delete(name);
    continue;
  }

  if (!map.get(name)) {
    map.set(name, 1);
  }
}

console.log([...map.keys()].sort().reverse().join("\n"));
