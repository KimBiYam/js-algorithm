const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const amount = input.shift();
  const N = 3;

  for (let i = 0; i < amount; i++) {
    const numbers = input[i].split(" ").map((number) => Number(number));

    numbers.sort((a, b) => b - a);
    console.log(numbers[N - 1]);
  }
};

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});
