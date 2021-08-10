function solution(answers) {
  const results = [];
  const methods = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const counts = [0, 0, 0];

  answers.forEach((answer, answerIndex) => {
    methods.forEach((method, methodIndex) => {
      if (method[answerIndex] === answer) {
        counts[methodIndex]++;
      }
    });
  });

  const maxCount = Math.max(...counts);

  counts.forEach((count, index) => {
    if (count === maxCount) {
      console.log(count, maxCount);
      results.push(index + 1);
    }
  });

  return results;
}

const answers = [1, 2, 3, 4, 5];
solution(answers);
