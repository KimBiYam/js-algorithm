const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const count = Number(input[0]);

  const stack = [];
  const result = [];
  let current = 1;
  let isBroken = false;

  for (let i = 1; i <= count; i++) {
    const number = Number(input[i]);

    while (current <= number) {
      stack.push(current);
      current += 1;
      result.push("+");
    }

    if (stack[stack.length - 1] === number) {
      stack.pop();
      result.push("-");
    } else {
      isBroken = true;
      break;
    }
  }

  console.log(isBroken ? "NO" : result.join("\n"));
};

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});
