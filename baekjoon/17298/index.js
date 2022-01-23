const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});

const solution = (input) => {
  const [N, numbersText] = input;

  const numbers = numbersText.split(" ").map((number) => Number(number));
  const stack = [];

  for (let i = 0; i < N; i++) {
    const currentNumber = numbers[i];

    while (
      stack.length !== 0 &&
      numbers[stack[stack.length - 1]] < currentNumber
    ) {
      numbers[stack.pop()] = currentNumber;
    }

    stack.push(i);
  }

  while (stack.length !== 0) {
    numbers[stack.pop()] = -1;
  }

  console.log(numbers.join(" "));
};
