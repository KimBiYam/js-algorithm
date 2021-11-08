const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (line) => {
  const numbers = line.split(" ").map((number) => Number(number));

  const startNumber = numbers[0];
  const endNumber = numbers[1];

  const sequence = [];

  for (let i = 1; i <= 45; i++) {
    for (let j = 1; j <= i; j++) {
      sequence.push(i);
    }
  }

  let sum = 0;

  for (let i = startNumber - 1; i < endNumber; i++) {
    sum += sequence[i];
  }

  console.log(sum);
};

rl.on("line", (line) => {
  solution(line);

  rl.close();
}).on("close", () => {
  process.exit();
});
