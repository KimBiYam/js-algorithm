/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const counter = {};
  let result;

  nums.forEach((num) => {
    counter[num] = counter[num] ? counter[num] + 1 : 1;
  });

  for (let num in counter) {
    if (counter[num] === 1) {
      result = num;
    }
  }

  return result;
};
