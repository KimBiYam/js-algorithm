const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const amount = input[0];
  const numbers = input[1].split(" ").map((number) => Number(number));

  let primeNumberCount = numbers.length;

  for (let i = 0; i < amount; i++) {
    for (let j = 1; j <= numbers[i]; j++) {
      if (numbers[i] === 1) {
        primeNumberCount -= 1;
        break;
      }

      if (numbers[i] % j === 0 && numbers[i] !== j && j !== 1) {
        primeNumberCount -= 1;
        break;
      }
    }
  }

  console.log(primeNumberCount);
};

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});
