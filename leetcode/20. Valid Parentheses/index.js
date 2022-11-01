/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s.length) return true;

  const openBrackets = ["(", "[", "{"];
  const closeBracketsMap = { ")": "(", "]": "[", "}": "{" };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const current = s[i];

    if (openBrackets.includes(current)) {
      stack.push(current);
    } else if (closeBracketsMap[current] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}")); // true
