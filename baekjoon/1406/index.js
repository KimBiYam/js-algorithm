const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const COMMANDS = {
  left: "L",
  right: "D",
  delete: "B",
  insert: "P",
};

const solution = (input) => {
  const initialWord = input[0];
  const count = Number(input[1]);

  const commands = input.slice(2, input.length);

  const leftStack = initialWord.split("");
  const rightStack = [];

  for (let i = 0; i < count; i++) {
    const command = commands[i].split(" ");
    const operator = command[0];
    const word = command[1];

    switch (operator) {
      case COMMANDS.insert:
        leftStack.push(word);
        break;
      case COMMANDS.delete:
        if (leftStack.length > 0) {
          leftStack.pop();
        }
        break;
      case COMMANDS.right:
        if (rightStack.length > 0) {
          leftStack.push(rightStack.pop());
        }
        break;
      case COMMANDS.left:
        if (leftStack.length > 0) {
          rightStack.push(leftStack.pop());
        }
    }
  }

  console.log([...leftStack, ...rightStack.reverse()].join(""));
};

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});
