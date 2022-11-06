/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const steps = [1, 2];

  for (let i = 2; i < n; i++) {
    steps[i] = steps[i - 2] + steps[i - 1];
  }

  return steps[n - 1];
};
