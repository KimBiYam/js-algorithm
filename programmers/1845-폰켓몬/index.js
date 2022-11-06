function solution(nums) {
  var answer = 0;
  const max = nums.length / 2;
  const counter = {};

  for (let i = 0; i < nums.length && answer < max; i++) {
    const current = nums[i];
    if (!counter[current]) {
      counter[current] = true;
    }
  }

  return Math.min(Object.keys(counter).length, max);
}
