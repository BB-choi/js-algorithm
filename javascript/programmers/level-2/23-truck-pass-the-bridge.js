// 다리를 지나는 트럭
// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from({ length: bridge_length }).fill(0); // 큐
  let curTruck = 0;
  let sec = 0;
  let bridgeTruckWeight = 0;

  while (1) {
    bridgeTruckWeight -= bridge.shift();

    if (bridgeTruckWeight + truck_weights[curTruck] <= weight) {
      bridge.push(truck_weights[curTruck]);
      bridgeTruckWeight += truck_weights[curTruck];
      curTruck++;
      sec++;
      continue;
    }

    bridge.push(0);
    sec++;
    if (!bridgeTruckWeight) {
      break;
    }
  }
  return sec;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
console.log(solution(1, 2, [1, 1, 1]));
console.log(solution(1, 1, [1, 1, 1]));
console.log(solution(4, 2, [1, 1, 1, 1]));
console.log(solution(3, 3, [1, 1, 1]));
