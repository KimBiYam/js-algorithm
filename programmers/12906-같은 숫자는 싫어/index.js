function solution(arr) {
  const stack = [];

  arr.forEach((num) => {
    if (stack[stack.length - 1] !== num) {
      stack.push(num);
    }
  });

  return stack;
}
