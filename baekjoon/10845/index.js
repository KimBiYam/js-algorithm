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

class Node {
  next;
  value;

  constructor(value) {
    this.value = value;
  }
}

class Queue {
  front;
  back;
  size = 0;

  dequeue() {
    if (this.front === undefined) {
      return -1;
    }

    let previousFront = this.front;
    const value = previousFront.value;
    this.front = previousFront.next;
    this.size -= 1;

    if (this.front === undefined) {
      this.back = undefined;
    }

    return value;
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.front === undefined) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
    }

    this.back = node;
    this.size += 1;
  }

  getFront() {
    return this.front ? this.front.value : -1;
  }

  getBack() {
    return this.back ? this.back.value : -1;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.front === undefined ? 1 : 0;
  }
}

const solution = (input) => {
  const queue = new Queue();
  const count = Number(input[0]);

  const queueFunctions = {
    push: (value) => queue.enqueue(value),
    pop: () => queue.dequeue(),
    front: () => queue.getFront(),
    back: () => queue.getBack(),
    empty: () => queue.isEmpty(),
    size: () => queue.getSize(),
  };

  const result = [];

  for (let i = 1; i <= count; i++) {
    const [command, value] = input[i].split(" ");

    if (command === "push") {
      queueFunctions.push(value);
    } else {
      result.push(queueFunctions[command]());
    }
  }

  console.log(result.join("\n"));
};
