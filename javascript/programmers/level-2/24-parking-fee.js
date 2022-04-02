// 주차 요금 계산
// https://programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  const [minTime, minFee, unitTime, unitFee] = fees;
  const feeMap = new Map();
  const carsSet = new Set();
  const carsFee = [];

  // 번호별로 feeMap, 차 번호는 carsSet에 데이터 저장
  for (const record of records) {
    const [time, num, inout] = record.split(" ");
    const existNumInfo = feeMap.get(num) ? feeMap.get(num) : [];
    carsSet.add(num);
    feeMap.set(num, [...existNumInfo, [time]]);
  }
  const cars = [...carsSet];
  for (const car of cars) {
    carsFee.push(calcFee(feeMap.get(car), car));
  }

  function calcFee(arr, carNum) {
    const len = arr.length;
    const newArr = [];
    for (let i = 0; i < len; i++) {
      const [timeInfo, inoutInfo] = arr[i];
      const [hour, min] = timeInfo.split(":").map(Number);
      newArr.push(hour * 60 + min);
    }
    // 출차 기록이 없으면 23:59에 출차
    if (newArr.length % 2) {
      newArr.push(23 * 60 + 59);
    }

    // 시간 계산
    const newArrLen = newArr.length;
    const times = [];

    for (let i = 1; i < newArrLen; i = i + 2) {
      times.push(newArr[i] - newArr[i - 1]);
    }

    let curTime = times.reduce((a, b) => a + b);
    let result = 0;
    if (curTime <= minTime) {
      result += minFee;
    } else {
      curTime -= minTime;
      result += minFee;
      result += unitFee * Math.ceil(curTime / unitTime);
    }

    // 차량번호 순으로 정렬하기 위해 차량번호를 담아서 return
    return [carNum, result];
  }

  return carsFee.sort((a, b) => a[0] - b[0]).map((el) => el[1]);
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);

console.log(
  solution(
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ]
  )
);

console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));
