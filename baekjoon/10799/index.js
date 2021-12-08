const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  solution(line);

  rl.close();
}).on("close", () => {
  process.exit();
});

const solution = (line) => {
  const stack = [];
  let result = 0;

  for (let i = 0; i < line.length; i++) {
    const bracket = line[i];

    if (bracket === "(") {
      stack.push(bracket);
    }

    if (bracket === ")") {
      stack.pop();

      const prevBracket = line[i - 1];

      if (prevBracket === "(") {
        result += stack.length;
      } else {
        result += 1;
      }
    }
  }

  console.log(result);
};
