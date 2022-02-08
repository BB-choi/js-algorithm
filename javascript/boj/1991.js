// 트리 순회
// https://www.acmicpc.net/problem/1991

let path = "input.txt";
path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = Number(input.shift());
let treeArr = input.map((el) =>
    el.split(" ").map((el) => el.replace(/[^A-Z.]/g, ""))
);

let tree = {};
for (let i = 0; i < N; i++) {
    const [root, left, right] = treeArr[i];
    tree[root] = [left, right];
}

const [LEFT, RIGHT] = [0, 1];

// 전위 preorder 중위 inorder 후위 postorder
let traversalResult = "";
function preorder(root) {
    if (root === ".") return;
    traversalResult += root;
    preorder(tree[root][LEFT]);
    preorder(tree[root][RIGHT]);
}

function inorder(root) {
    if (root === ".") return;
    inorder(tree[root][LEFT]);
    traversalResult += root;
    inorder(tree[root][RIGHT]);
}

function postorder(root) {
    if (root === ".") return;
    postorder(tree[root][LEFT]);
    postorder(tree[root][RIGHT]);
    traversalResult += root;
}

preorder(treeArr[0][0]);
console.log(traversalResult);
traversalResult = "";

inorder(treeArr[0][0]);
console.log(traversalResult);
traversalResult = "";

postorder(treeArr[0][0]);
console.log(traversalResult);
traversalResult = "";
