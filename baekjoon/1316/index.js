const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});

const solution = (input) => {
  const [wordCount, ...words] = input;
  let count = 0;

  for (let i = 0; i < wordCount; i++) {
    count++;

    const checked = {};

    for (let j = 0; j < words[i].length; j++) {
      const cur = words[i][j];
      const prev = words[i][j - 1];

      if (cur !== prev && !checked[cur]) {
        checked[cur] = true;
      } else if (cur !== prev && checked[cur]) {
        count--;
        break;
      }
    }
  }

  console.log(count);
};
