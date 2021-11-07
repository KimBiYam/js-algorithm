const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getGreatestCommonFactor = (a, b) => {
  while (b > 0) {
    const tmp = a;
    a = b;
    b = tmp % b;
  }
  return a;
};

const solution = (line) => {
  const numbers = line.split(" ").map((number) => Number(number));

  const a = numbers[0];
  const b = numbers[1];

  let greatestCommonFactor = getGreatestCommonFactor(a, b);
  let leastCommonMultiple = (a * b) / greatestCommonFactor;

  console.log(greatestCommonFactor);
  console.log(leastCommonMultiple);
};

rl.on("line", (line) => {
  solution(line);

  rl.close();
}).on("close", () => {
  process.exit();
});
