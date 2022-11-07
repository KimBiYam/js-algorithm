function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (current === "(") {
      stack.push(current);
    } else if (current === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      stack.push(current);
    }
  }

  return stack.length === 0;
}

console.log(solution("))"));
