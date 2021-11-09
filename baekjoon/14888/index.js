const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const MAXIMUM_VALUE = 1000000000;

  const numberCount = Number(input[0]);
  const numbers = input[1].split(" ").map((number) => Number(number));
  const operators = input[2].split(" ").map((operator) => Number(operator));

  let max = -MAXIMUM_VALUE;
  let min = MAXIMUM_VALUE;

  const calculate = (number, index) => {
    if (index === numberCount) {
      max = Math.max(max, number);
      min = Math.min(min, number);
      return;
    }

    for (let i = 0; i < 4; i++) {
      // operators 에서 해당 연산자 갯수가 있으면 갯수를 빼주고 재귀 호출
      if (operators[i] > 0) {
        operators[i]--;

        switch (i) {
          case 0:
            calculate(number + numbers[index], index + 1);
            break;
          case 1:
            calculate(number - numbers[index], index + 1);
            break;
          case 2:
            calculate(number * numbers[index], index + 1);
            break;
          case 3:
            // parseInt로 나눈 후 나머지를 버림
            calculate(parseInt(number / numbers[index]), index + 1);
            break;
        }

        // 재귀가 끝난 후 다시 연산자 갯수 추가
        operators[i]++;
      }
    }
  };

  calculate(numbers[0], 1);

  // max, min값이 -0인 경우의 처리를 위한 삼항연산자
  console.log(max ? max : 0);
  console.log(min ? min : 0);
};

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});
