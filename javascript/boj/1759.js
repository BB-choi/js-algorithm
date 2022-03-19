// 암호 만들기
// https://www.acmicpc.net/problem/1759

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");

const [L, C] = input[0].split(" ").map(Number);
const chars = input[1].split(" ");

const mo = chars.filter(
  (el) => el === "a" || el === "e" || el === "i" || el === "o" || el === "u"
);
// const ja = chars.filter((el) => !mo.includes(el));
chars.sort();

const minMoCnt = 1;
const minJaCnt = 2;

const visited = Array.from({ length: C }).fill(0);
let answer = "";

function find(len, cur) {
  if (len === L) {
    let moCnt = 0;
    let jaCnt = 0;
    for (let i = 0; i < C; i++) {
      if (visited[i]) {
        if (mo.includes(chars[i])) {
          moCnt++;
        } else {
          jaCnt++;
        }
      }
    }
    if (moCnt >= minMoCnt && jaCnt >= minJaCnt) {
      let str = "";
      let visitedCnt = 0;
      for (let i = 0; i < C; i++) {
        if (visited[i]) {
          str += chars[i];
          visitedCnt++;
        }
      }
      //   return;을 안해줬었기 때문에 length 체크를 해야했음.
      //   if (str.length === L) {
      answer += str + "\n";
      //   }
    }
    return; // len === L일때 종료되므로 length 체크 불필요
  }

  for (let i = cur; i < C; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      find(len + 1, i);
      visited[i] = 0;
    }
  }
}

find(0, 0);

console.log(answer);
