const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const dimensions = input[0].split(" ").map((dimension) => Number(dimension));
  const blockHeights = input[1].split(" ").map((height) => Number(height));

  const width = dimensions[1];

  let sum = 0;

  for (let i = 0; i < width; i++) {
    let leftMaxHeight = 0;
    let rightMaxHeight = 0;

    for (let j = 0; j < i; j++) {
      leftMaxHeight = Math.max(leftMaxHeight, blockHeights[j]);
    }

    for (let k = i; k < width; k++) {
      rightMaxHeight = Math.max(rightMaxHeight, blockHeights[k]);
    }

    sum += Math.max(
      0,
      Math.min(leftMaxHeight, rightMaxHeight) - blockHeights[i]
    );
  }

  console.log(sum);
};

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});
