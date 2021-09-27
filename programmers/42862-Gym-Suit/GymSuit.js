function solution(n, losts, reserves) {
  let answer = n - losts.length;

  reserves.sort((a, b) => a - b);
  losts.sort((a, b) => a - b);

  reserves.forEach((reserve) => {
    const lostIndex = losts.indexOf(reserve);
    if (lostIndex >= 0) {
      losts.splice(lostIndex, 1);
      answer++;
      return;
    }

    losts.forEach((lost, lostIndex) => {
      if (reserves.includes(lost)) {
        return;
      }

      if (lost === reserve - 1 || lost === reserve + 1) {
        losts.splice(lostIndex, 1);
        answer++;
      }
    });
  });

  return answer;
}

const n = 1;
const losts = [1];
const reserves = [1];

solution(n, losts, reserves);
