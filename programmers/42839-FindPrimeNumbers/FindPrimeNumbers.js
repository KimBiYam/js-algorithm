const solution = (numbers) => {
  let answer = 0;

  const numbersArray = numbers.split("");

  const result = getPermutations(numbersArray, 2);

  return answer;
};

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) {
    return arr.map((value) => [value]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const numbers = "17";
solution(numbers);
