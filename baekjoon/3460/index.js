const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const testCount = Number(input.shift());
  const inputNumbers = input.map((number) => Number(number));

  for (let i = 0; i < testCount; i++) {
    let number = inputNumbers[i];
    const remainders = [];

    // 값을 2로 나눈 나머지 값을 배열로 만든 후 뒤집으면 2진수의 형태가 됨
    while (number !== 0) {
      remainders.push(number % 2);
      number = Math.floor(number / 2);
    }

    // 하지만 낮은 자리 부터 출력을 해야하므로 굳이 뒤집지 않고 바로 출력
    let result = "";
    remainders.forEach((remainder, index) => {
      if (remainder === 1) {
        result += index.toString() + " ";
      }
    });

    console.log(result);
  }
};

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});
