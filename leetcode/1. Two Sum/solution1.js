/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 시간복잡도 o(n) 해결법
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== i) {
      return [i, map[complement]];
    }
  }
};

const nums = [3, 2, 4];
const target = 6;

console.log(twoSum(nums, target)); // [0,1]
