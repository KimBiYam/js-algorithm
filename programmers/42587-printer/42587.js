function solution(priorities, location) {
  var answer = 0;
  let count = 0;

  priorities.sort((a, b) => {
    if (b - a < 0) {
    }

    return b - a;
  });

  console.log(priorities);

  console.log(answer);
  return answer;
}

const priorities = [2, 1, 3, 2];
const location = 2;

solution(priorities, location);
