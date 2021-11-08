const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const startNumber = Number(input[0]);
  const endNumber = Number(input[1]);

  let sum = 0;
  let minimum = -1;

  for (let i = startNumber; i <= endNumber; i++) {
    let isPrimeNumber = true;

    for (j = 1; j <= i; j++) {
      if (i === 1) {
        isPrimeNumber = false;
        break;
      }

      if (i % j === 0 && i !== j && j !== 1) {
        isPrimeNumber = false;
        break;
      }
    }

    if (isPrimeNumber && minimum === -1) {
      minimum = i;
    }

    if (isPrimeNumber) {
      sum += i;
    }
  }

  if (minimum === -1) {
    console.log(minimum);
  } else {
    console.log(sum);
    console.log(minimum);
  }
};

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});
