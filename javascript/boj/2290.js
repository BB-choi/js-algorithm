// LCD Test
// https://www.acmicpc.net/problem/2290

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split(" ");
const s = Number(input[0]);
const nums = input[1].split("").map(Number);

let result = "";

let cols = s * 2 + 3;
let rows = s + 2;
const center = Math.floor(cols / 2);

let length = nums.length;

for (let i = 0; i < cols; i++) {
  // 각 줄마다 반복
  for (let j = 0; j < length; j++) {
    if (nums[j] === 1) {
      if (i === 0 || i === cols - 1 || i === center) {
        result += " ".repeat(rows - 1);
        result += " ";
        result += " ";
        // result += "$";
      } else {
        result += " ".repeat(rows - 1);
        result += "|";
        result += " ";
        // result += "$";
      }
    }

    if (nums[j] === 2) {
      if (i === 0 || i === cols - 1 || i === center) {
        result += " ";
        result += "-".repeat(rows - 2);
        result += " ";
        result += " ";
        // result += "$";
      } else if (i < center) {
        result += " ".repeat(rows - 1);
        result += "|";
        result += " ";
        // result += "$";
      } else {
        result += "|";
        result += " ".repeat(rows - 1);
        result += " ";
        // result += "$";
      }
    }

    if (nums[j] === 3) {
      if (i === 0 || i === cols - 1 || i === center) {
        result += " ";
        result += "-".repeat(rows - 2);
        result += " ";
        result += " ";

        // result += "$";
      } else {
        result += " ".repeat(rows - 1);
        result += "|";
        result += " ";
        // result += "$";
      }
    }

    if (nums[j] === 4) {
      if (i === 0 || i === cols - 1) {
        result += " ".repeat(rows);
        result += " ";
        // result += "$";
      } else if (i === center) {
        result += " ";
        result += "-".repeat(rows - 2);
        result += " ";
        result += " ";
        // result += "$";
      } else if (i < center) {
        result += "|";
        result += " ".repeat(rows - 2);
        result += "|";
        result += " ";
        // result += "$";
      } else {
        result += " ".repeat(rows - 1);
        result += "|";
        result += " ";
        // result += "$";
      }
    }

    if (nums[j] === 5) {
      if (i === 0 || i === cols - 1 || i === center) {
        result += " ";
        result += "-".repeat(rows - 2);
        result += " ".repeat(2);
        // result += "$";
      } else if (i < center) {
        result += "|";
        result += " ".repeat(rows - 1);
        result += " ";
        // result += "$";
      } else {
        result += " ".repeat(rows - 1);
        result += "|";
        result += " ";
        // result += "$";
      }
    }

    if (nums[j] === 6) {
      if (i === 0 || i === cols - 1 || i === center) {
        result += " ";
        result += "-".repeat(rows - 2);
        result += " ".repeat(2);
        // result += "$";
      } else if (i < center) {
        result += "|";
        result += " ".repeat(rows - 1);
        result += " ";
        // result += "$";
      } else {
        result += "|";
        result += " ".repeat(rows - 2);
        result += "|";
        result += " ";
        // result += "$";
      }
    }

    if (nums[j] === 7) {
      if (i === 0) {
        result += " ";
        result += "-".repeat(rows - 2);
        result += " ";
        result += " ";
        // result += "$";
      } else if (i === cols - 1 || i === center) {
        result += " ".repeat(rows);
        result += " ";
        // result += "$";
      } else {
        result += " ".repeat(rows - 1);
        result += "|";
        result += " ";
        // result += "$";
      }
    }

    if (nums[j] === 8) {
      if (i === 0 || i === cols - 1 || i === center) {
        result += " ";
        result += "-".repeat(rows - 2);
        result += " ";
        result += " ";
        // result += "$";
      } else {
        result += "|";
        result += " ".repeat(rows - 2);
        result += "|";
        result += " ";
        // result += "$";
      }
    }

    if (nums[j] === 9) {
      if (i === 0 || i === cols - 1 || i === center) {
        result += " ";
        result += "-".repeat(rows - 2);
        result += " ";
        result += " ";
        // result += "$";
      } else if (i < center) {
        result += "|";
        result += " ".repeat(rows - 2);
        result += "|";
        result += " ";
        // result += "$";
      } else {
        result += " ".repeat(rows - 1);
        result += "|";
        result += " ";
        // result += "$";
      }
    }

    if (nums[j] === 0) {
      if (i === 0 || i === cols - 1) {
        result += " ";
        result += "-".repeat(rows - 2);
        result += " ";
        result += " ";
        // result += "$";
      } else if (i === center) {
        result += " ".repeat(rows);
        result += " ";
        // result += "$";
      } else {
        result += "|";
        result += " ".repeat(rows - 2);
        result += "|";
        result += " ";
        // result += "$";
      }
    }
  }
  result += "\n";
}

console.log(result);
