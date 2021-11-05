const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const heights = input.map((number) => Number(number));
  // 난쟁이들의 키를 합산
  const sum = heights.reduce((total, height) => total + height, 0);

  // 9명 중 합산에서 특정 두 난쟁이들의 키를 뺐을때 100이 나오면 그 둘이 답이됨
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      if (sum - (heights[i] + heights[j]) === 100) {
        heights.splice(j, 1);
        heights.splice(i, 1);

        break;
      }
    }
  }

  heights.sort((a, b) => a - b).forEach((height) => console.log(height));
};

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});
