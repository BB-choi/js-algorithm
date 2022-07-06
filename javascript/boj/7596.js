// MP3 Songs
// https://www.acmicpc.net/problem/7596

let path = "input.txt";
// path = "/dev/stdin"

let input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());
const len = input.length;

let answer = "";
let currentCount = 0;

const compareStringIgnoreCase = (a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }

  if (b.toLowerCase() < a.toLowerCase()) {
    return 1;
  }

  return 0;
};

const sortSongs = (arr) => {
  ++currentCount;
  if (currentCount > 1) {
    answer += "\n";
  }
  answer += currentCount + "\n";

  answer += arr.sort(compareStringIgnoreCase).join("\n");
};

for (let i = 0; i < len; i++) {
  if (Number(input[i]) === 0) {
    console.log(answer);
    break;
  }

  if (!isNaN(Number(input[i]))) {
    const start = i + 1;
    const end = start + Number(input[i]);
    sortSongs(input.slice(start, end));

    i += Number(input[i]);
    continue;
  }
}
