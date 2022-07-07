// 너구리 구구
// https://www.acmicpc.net/problem/18126

let path = "input.txt";
// path = "/dev/stdin";

let [N, ...loads] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

N = Number(N) - 1;
const loadObject = {};
// {
//   1:  [[다음, 거리]]
// }

for (let i = 0; i < N; i++) {
  const [지금, 다음, 거리] = loads[i].split(" ");

  if (loadObject[지금]) {
    loadObject[지금] = [...loadObject[지금], [Number(다음), BigInt(거리)]];
  }

  if (loadObject[다음]) {
    loadObject[다음] = [...loadObject[다음], [Number(지금), BigInt(거리)]];
  }

  if (!loadObject[지금]) {
    loadObject[지금] = [[Number(다음), BigInt(거리)]];
  }

  if (!loadObject[다음]) {
    loadObject[다음] = [[Number(지금), BigInt(거리)]];
  }
}

let answerDistance = [];
const findDistance = (지금, distance, visited) => {
  if (!loadObject[지금]) {
    answerDistance.push(distance);
    return;
  }
  const 다음노드배열 = loadObject[지금].filter(
    ([다음, 거리]) => !visited[다음]
  );
  const 길이 = 다음노드배열.length;

  if (길이 === 0) {
    answerDistance.push(distance);
    return;
  }

  for (let i = 0; i < 길이; i++) {
    const [다음, 거리] = 다음노드배열[i];
    if (!visited[다음]) {
      visited[다음] = 1;
      findDistance(다음, distance + 거리, visited);
      visited[다음] = 0;
    }
  }
};

visited = [0];
visited[1] = 1;
findDistance(1, BigInt(0), visited);

console.log(Math.max(...answerDistance.map((el) => el.toString())));
