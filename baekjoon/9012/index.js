const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const count = Number(input[0]);
  const result = [];

  for (let i = 1; i <= count; i++) {
    const stack = [];
    let isBroken = false;
    const brackets = input[i];

    for (let j = 0; j < brackets.length; j++) {
      const bracket = brackets.charAt(j);

      if (bracket === "(") {
        stack.push(bracket);
      } else if (bracket === ")") {
        const poppedValue = stack.pop();
        if (poppedValue === undefined) {
          isBroken = true;
        }
      }
    }

    if (stack.length > 0) {
      isBroken = true;
    }

    result.push(isBroken ? "NO" : "YES");
  }

  console.log(result.join("\n"));
};

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});
