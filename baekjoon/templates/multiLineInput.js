function solution(list) {
  console.log(list);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = parseInt(input[0]);

  let list = input[1].split(" ").map((el) => parseInt(el));

  solution(list);

  process.exit();
});
