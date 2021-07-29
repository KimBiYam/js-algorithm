function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length > 0) {
    progresses.forEach((progress, index) => {
      if (progress < 100) {
        progresses[index] = progress + speeds[index];
      }
    });

    if (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();

      let completeCount = 1;

      progresses.some((progress) => {
        if (progress < 100) {
          return true;
        }

        completeCount++;
      });

      progresses.splice(0, completeCount - 1);
      speeds.splice(0, completeCount - 1);
      answer.push(completeCount);
    }
  }

  return answer;
}

const progresses = [96, 99, 98, 97];
const speeds = [1, 1, 1, 1];

console.log(solution(progresses, speeds));
