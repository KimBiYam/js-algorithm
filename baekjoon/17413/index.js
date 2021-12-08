const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  solution(line);

  rl.close();
}).on("close", () => {
  process.exit();
});

const solution = (input) => {
  const result = [];

  let temp = "";
  let isTagOpen = false;

  for (let i = 0; i < input.length; i++) {
    const character = input[i];

    if (character === "<") {
      if (temp !== "") {
        result.push(reverseWord(temp));
        temp = character;
      } else {
        temp += character;
      }
      isTagOpen = true;
    } else if (character === ">") {
      temp += character;
      result.push(temp);
      temp = "";
      isTagOpen = false;
    } else if (!isTagOpen && character === " ") {
      temp = reverseWord(temp) + " ";
      result.push(temp);
      temp = "";
    } else if (!isTagOpen && i === input.length - 1) {
      temp += character;
      result.push(reverseWord(temp));
    } else {
      temp += character;
    }
  }

  console.log(result.join(""));
};

const reverseWord = (word) =>
  word.split("").reduce((result, text) => text + result, "");
