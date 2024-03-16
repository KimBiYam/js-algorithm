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

const solution = (word) => {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    count++;

    if (word[i] === "c") {
      if (word[i + 1] === "=" || word[i + 1] === "-") {
        count--;
      }
    }

    if (word[i] === "d") {
      if (word[i + 1] === "-") {
        count--;
      }

      if (word[i + 1] === "z" && word[i + 2] === "=") {
        count -= 2;
      }
    }

    if (word[i] === "l" && word[i + 1] === "j") {
      count--;
    }

    if (word[i] === "n" && word[i + 1] === "j") {
      count--;
    }

    if (word[i] === "s" && word[i + 1] === "=") {
      count--;
    }

    if (word[i - 1] !== "d" && word[i] === "z" && word[i + 1] === "=") {
      count--;
    }
  }

  console.log(count);
};
