// 재귀함수가 뭔가요?
// https://www.acmicpc.net/problem/17478

let path = "input.txt";
// path = "/dev/stdin";

let N = Number(require("fs").readFileSync(path).toString().trim());

const pre = `어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.
"재귀함수가 뭔가요?"
"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;

const end = "라고 답변하였지.\n";

const line = "____";
const s1 = `"재귀함수가 뭔가요?"\n`;
const s2 = `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n`;
const s3 = `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n`;
const s4 = `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n`;
const answer = `"재귀함수는 자기 자신을 호출하는 함수라네"\n`;

let print = "";
let count = 0;

function addLine(count) {
  let str = "";
  while (count) {
    str += line;
    count--;
  }

  return str;
}

function addEnd(count) {
  let str = "";

  while (count) {
    str += addLine(count) + end;
    count--;
  }

  return str;
}

function recursive(num) {
  if (num === 0) {
    print += addEnd(count);
    print += end;
    return;
  }

  count++;

  if (num === 1) {
    print += addLine(count) + s1;
    print += addLine(count) + answer;
  } else {
    print += addLine(count) + s1;
    print += addLine(count) + s2;
    print += addLine(count) + s3;
    print += addLine(count) + s4;
  }

  recursive(num - 1);
}

recursive(N);
console.log(pre + "\n" + print);
