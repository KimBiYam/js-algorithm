function solution(numbers, commands) {
  const answer = [];

  commands.forEach((command) => {
    const startIndex = command[0] - 1;
    const lastIndex = command[1];
    const targetIndex = command[2] - 1;

    const sortedNumbers = numbers
      .slice(startIndex, lastIndex)
      .sort((a, b) => a - b);

    answer.push(sortedNumbers[targetIndex]);
  });

  return answer;
}
