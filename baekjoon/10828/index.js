const readline = require("readline");

class Stack {
  list = [];
  size = 0;
  top;

  push(value) {
    this.list[this.list.length] = value;
    this.top = value;
    this.size += 1;
  }

  pop() {
    if (!this.top) {
      return -1;
    }

    const previousTop = this.top;
    this.list.splice([this.list.length - 1], 1);

    const newTop = this.list[this.list.length - 1];
    this.top = newTop;
    this.size -= 1;

    return previousTop;
  }

  getSize() {
    return this.size;
  }

  getTop() {
    return this.top ?? -1;
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }
}

const INPUTS = {
  PUSH: "push",
  POP: "pop",
  SIZE: "size",
  EMPTY: "empty",
  TOP: "top",
};

const solution = (input) => {
  const inputCount = Number(input[0]);
  const stack = new Stack();

  const result = [];

  for (let i = 1; i <= inputCount; i++) {
    const command = input[i];

    if (command.includes(INPUTS.PUSH)) {
      const value = Number(command.split(" ")[1]);
      stack.push(value);
    } else if (command === INPUTS.POP) {
      result.push(stack.pop());
    } else if (command === INPUTS.TOP) {
      result.push(stack.getTop());
    } else if (command === INPUTS.SIZE) {
      result.push(stack.getSize());
    } else if (command === INPUTS.EMPTY) {
      result.push(stack.isEmpty());
    }
  }

  console.log(result.join("\n"));
};

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
