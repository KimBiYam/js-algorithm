function solution(list) {
  console.log(list);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let list = [];
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  list.push(input.split(" ").map((el) => el));

  list.push(input.split(" ").map((el) => parseInt(el)));

  solution(list);

  process.exit();
});
