function solution(input) {
  console.log(input);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,

  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  input = line;

  input = parseInt(line);

  rl.close();
}).on("close", function () {
  solution(input);

  process.exit();
});
