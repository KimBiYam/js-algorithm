const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let countOfRidingPerson = 0;
  let maximumCount = 0;

  for (let i = 0; i < input.length; i++) {
    const numbers = input[i].split(" ");

    const countOfGettingOff = Number(numbers[0]);
    const countOfRiding = Number(numbers[1]);

    countOfRidingPerson -= countOfGettingOff;
    countOfRidingPerson += countOfRiding;

    if (countOfRidingPerson > maximumCount) {
      maximumCount = countOfRidingPerson;
    }
  }

  console.log(maximumCount);
};

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});
