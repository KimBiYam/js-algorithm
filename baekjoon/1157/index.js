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
  const counter = {};
  let max = 0;
  let result;

  for (let i = 0; i < line.length; i++) {
    const current = line[i].toUpperCase();
    counter[current] = (counter[current] ?? 0) + 1;

    if (counter[current] > max) {
      max = counter[current];
      result = current;
    }
  }

  let maxKeys = 0;
  for (const key in counter) {
    if (counter[key] === max) {
      maxKeys++;
    }

    if (maxKeys > 1) {
      console.log("?");
      return;
    }
  }

  console.log(result);
};
