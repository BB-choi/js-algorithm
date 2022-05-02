// 합이 같은 부분집합(DFS : 아마존 인터뷰)
function solution(arr) {
  let answer = "NO";
  let check = Array.from({ length: arr.length }, () => 0);

  let resultArrs = [];
  function dfs(idx) {
    if (!arr[idx]) {
      const cur = arr.filter((el, idx) => {
        if (check[idx]) {
          return el;
        }
      });
      if (cur.length) {
        resultArrs.push(cur);
      }
      return;
    }

    check[idx] = 0;
    dfs(idx + 1);
    check[idx] = 1;
    dfs(idx + 1);
  }

  dfs(0);
  const set = new Set(resultArrs);
  const setArr = [...set];

  for (let i = 0; i < setArr.length; i++) {
    const diff = arr.filter((el) => !setArr[i].includes(el));
    const sum = setArr[i].reduce((a, b) => a + b);

    if (!diff.length) {
      continue;
    }

    if (diff.reduce((a, b) => a + b) === sum) {
      answer = "YES";
      break;
    }
  }

  return answer;
}

function newSolution(arr) {
  let answer = "NO";
  const lastIdx = arr.length - 1;
  const totalSum = arr.reduce((a, b) => a + b);
  let flag = 0;

  function dfs(idx, sum) {
    if (idx === lastIdx) {
      if (flag) {
        return;
      }
      if (totalSum - sum === sum) {
        answer = "YES";
        flag = 1;
        // 여기서 return 하면 재귀함수는 계속 동작한다.(스택에 남아있음)
      }

      return;
    }
    dfs(idx + 1, sum + arr[idx]);
    dfs(idx + 1, sum);
  }

  dfs(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
console.log(newSolution(arr));
