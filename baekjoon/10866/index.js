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
  prev;
  next;
  value;

  constructor(value) {
    this.value = value;
  }
}

class Deque {
  front;
  back;
  size = 0;

  pushFront(value) {
    if (this.isEmpty()) {
      const node = new Node(value);

      this.front = node;
      this.back = node;
    } else {
      const node = new Node(value);

      node.next = this.front;
      this.front.prev = node;
      this.front = node;
    }

    this.size++;
  }

  pushBack(value) {
    if (this.isEmpty()) {
      const node = new Node(value);

      this.front = node;
      this.back = node;
    } else {
      const node = new Node(value);

      node.prev = this.back;
      this.back.next = node;
      this.back = node;
    }

    this.size++;
  }

  popFront() {
    if (this.front === undefined) {
      return -1;
    }

    if (this.size === 1) {
      const value = this.front.value;

      this.front = undefined;
      this.back = undefined;
      this.size -= 1;

      return value;
    } else {
      const value = this.front.value;

      this.front = this.front.next;
      this.size -= 1;

      return value;
    }
  }

  popBack() {
    if (this.back === undefined) {
      return -1;
    }

    if (this.size === 1) {
      const value = this.back.value;

      this.front = undefined;
      this.back = undefined;
      this.size -= 1;

      return value;
    } else {
      const value = this.back.value;

      this.back = this.back.prev;
      this.size -= 1;

      return value;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }

  getFront() {
    return this.front ? this.front.value : -1;
  }

  getBack() {
    return this.back ? this.back.value : -1;
  }
}

const solution = (input) => {
  const deque = new Deque();
  const count = Number(input[0]);

  const dequeFunctions = {
    push_front: (value) => deque.pushFront(value),
    push_back: (value) => deque.pushBack(value),
    pop_front: () => deque.popFront(),
    pop_back: () => deque.popBack(),
    size: () => deque.getSize(),
    empty: () => deque.isEmpty(),
    front: () => deque.getFront(),
    back: () => deque.getBack(),
  };

  const result = [];

  for (let i = 1; i <= count; i++) {
    const command = input[i].split(" ")[0];

    if (command.includes("push")) {
      const value = Number(input[i].split(" ")[1]);
      dequeFunctions[command](value);
    } else {
      result.push(dequeFunctions[command]());
    }
  }

  console.log(result.join("\n"));
};
