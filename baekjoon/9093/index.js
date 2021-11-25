const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const count = Number(input[0]);
  const result = [];

  for (let i = 1; i <= count; i++) {
    let reversedWords = [];
    const words = input[i].split(" ");

    for (let j = 0; j < words.length; j++) {
      reversedWords.push(reverseWords(words[j]));
    }

    result.push(reversedWords.join(" "));
  }

  console.log(result.join("\n"));
};

const reverseWords = (word) => {
  const stack = [];
  let reversedWord = "";

  for (let i = 0; i < word.length; i++) {
    stack.push(word.charAt(i));
  }

  for (let i = 0; i < word.length; i++) {
    reversedWord += stack.pop();
  }

  return reversedWord;
};

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);

  process.exit();
});
