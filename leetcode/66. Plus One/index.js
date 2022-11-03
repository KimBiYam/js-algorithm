const plusOne = (digits) => {
  // 숫자 배열 끝부터 순회
  for (let i = digits.length - 1; i >= 0; i--) {
    // 9면 다음 자릿 수로 넘겨주기 위해 해당 값을 0으로 변경
    // 그 후 다시 순회하면 다음 자릿 수의 인덱스로 넘어가게 된다
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      // 아닌 경우 1 더해주고 바로 리턴해버린다.
      digits[i]++;
      return digits;
    }
  }

  // 만약 배열이 [9] 이런 식으로 들어온다면 위 반복문에서
  // 0으로 변경 후 바로 반복문을 빠져나오기 때문에 10으로 변경해주기 위해 처리
  return [1, ...digits];
};
