const { ifError } = require("assert");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (line) => {
  const brackets = [];
  const inputBrackets = line.split("");

  let sum = 0;
  let temp = 1;

  let isBroken = false;

  inputBrackets.forEach((bracket, index, inputBrackets) => {
    if (isBroken) {
      return false;
    }

    switch (bracket) {
      case "(":
        brackets.push(bracket);
        temp *= 2;
        break;
      case "[":
        brackets.push(bracket);
        temp *= 3;
        break;
      case ")":
        if (!brackets.some((bracket) => bracket === "(")) {
          sum = 0;
          isBroken = true;
          return;
        }

        if (inputBrackets[index - 1] === "(") {
          sum += temp;
        }

        brackets.pop();
        temp = temp / 2;
        break;
      case "]":
        if (!brackets.some((bracket) => bracket === "[")) {
          sum = 0;
          isBroken = true;
          return;
        }

        if (inputBrackets[index - 1] === "[") {
          sum += temp;
        }

        brackets.pop();
        temp = temp / 3;
    }
  });

  if (brackets.length > 0) {
    sum = 0;
  }

  console.log(sum);
};

rl.on("line", (line) => {
  solution(line);

  rl.close();
}).on("close", () => {
  process.exit();
});
