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
  const input = line.split(" ");
  const N = Number(input[0]);
  const K = Number(input[1]);

  const list = Array.from({ length: N }).map((_, index) => index + 1);
  let targetIndex = 0;
  const result = [];

  while (list.length !== 0) {
    const newTarget = targetIndex + K - 1;

    targetIndex =
      newTarget >= list.length ? newTarget % list.length : newTarget;

    result.push(list[targetIndex]);
    list.splice(targetIndex, 1);
  }

  console.log(`<${result.join(", ")}>`);
};
