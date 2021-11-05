const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (line) => {
  const number = Number(line);

  console.log(getFibonacciNumbers(number));
};

const getFibonacciNumbers = (number) => {
  if (number === 0) {
    return 0;
  }

  if (number === 1 || number === 2) {
    return 1;
  }

  return getFibonacciNumbers(number - 2) + getFibonacciNumbers(number - 1);
};

rl.on("line", (line) => {
  solution(line);

  rl.close();
}).on("close", () => {
  process.exit();
});
