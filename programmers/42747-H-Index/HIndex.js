function solution(citations) {
  let answer = 1;

  citations.sort((a, b) => a - b);

  citations.forEach((citation) => {
    const citationsCount = citations.filter((e) => e >= citation).length;

    if (citationsCount > answer) {
      answer = citationsCount;
    }

    if (citationsCount >= citation) {
      answer = citation;
    }
  });

  return answer;
}
