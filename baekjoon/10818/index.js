const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const count = Number(input[0]);
  const numbers = input[1].split(" ");

  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < count; i++) {
    const number = Number(numbers[i]);

    if (number > max) {
      max = number;
    }

    if (number < min) {
      min = number;
    }
  }

  console.log(`${min} ${max}`);
};

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});
