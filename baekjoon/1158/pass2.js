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
  const [N, K] = line.split(" ").map(Number);
  const queue = Array.from({ length: N }).map((_, index) => index + 1);

  const result = [];

  while (queue.length !== 0) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.shift());
    }

    result.push(queue.shift());
  }

  console.log(`<${result.join(", ")}>`);
};
