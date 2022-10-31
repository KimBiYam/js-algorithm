/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  // 2차원 배열 내부의 배열 갯수 -1 만큼 반복을 돈다
  for (let i = 0; i < matrix.length - 1; i++) {
    // 현재 열과 다음 열을 변수에 할당
    const current = matrix[i];
    const next = matrix[i + 1];

    for (let j = 0; j < next.length; j++) {
      // 이전 열의 대각선에 해당하는 인덱스를 지정
      const compareIndex = j - 1;

      // 비교할 인덱스가 유효할 경우에만 비교 수행
      // 대각에 하나라도 다른 값이 있으면 false 리턴
      if (compareIndex >= 0 && current[compareIndex] !== next[j]) {
        return false;
      }
    }
  }

  return true;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2],
];
console.log(isToeplitzMatrix(matrix)); // true
