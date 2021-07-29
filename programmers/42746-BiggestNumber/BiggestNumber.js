function solution(numbers) {
  const answer = [];

  numbers.forEach((number) => {
    answer.push(String(number));
  });

  const result = answer.sort((a, b) => Number(b + a) - Number(a + b)).join("");

  return result[0] === "0" ? "0" : result;
}
