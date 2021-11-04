const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (line) => {
  const numbers = line.split(" ");

  const N = Number(numbers[0]);
  const K = Number(numbers[1]);

  let result = 0;
  let primeNumberCount = 0;

  // 1부터 주어진 수 까지 1씩 증가하며 체크
  for (let i = 1; i <= N; i++) {
    // 소수인 경우 primeNumberCount를 1 증가
    if (N % i === 0) {
      primeNumberCount += 1;
    }

    // 찾고자하는 K번째 수와 같은 count이면 종료
    if (primeNumberCount === K) {
      result = i;
      break;
    }
  }

  console.log(result);
};

rl.on("line", (line) => {
  solution(line);

  rl.close();
}).on("close", () => {
  process.exit();
});
