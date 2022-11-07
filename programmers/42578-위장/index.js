function solution(clothes) {
  let answer = 1;
  const clothesMap = {};

  for (let [item, type] of clothes) {
    if (clothesMap[type]) {
      clothesMap[type].push(item);
    } else {
      clothesMap[type] = [item];
    }
  }

  for (let key in clothesMap) {
    // 하나의 타입에서만 선택 하는 경우가 생길 수 있어서 (A+1) * (B+1)의 경우의 수가 나온다.
    answer *= clothesMap[key].length + 1;
  }

  // 아무것도 입지않는 경우는 제외해야하기 때문에 1을 빼줌
  answer -= 1;
  return answer;
}
