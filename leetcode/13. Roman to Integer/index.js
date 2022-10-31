/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const ROMAN_NUMERALS_TABLE = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    // 현재와 다음 값
    const current = ROMAN_NUMERALS_TABLE[s[i]];
    const next = ROMAN_NUMERALS_TABLE[s[i + 1]];

    // 로마 숫자에서 오른쪽 값이 더 큰 숫자가 오는 경우 오른쪽 - 왼쪽 숫자가 값이 된다.
    // 예: CM = 900, XD = 90
    // 비교할때 두 자릿수만 비교하면 되기 때문에 현재 값이 다음 값보다 작으면 빼주고 아니면 더해주기만 하면 됨
    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};

const roman = "III";
console.log(romanToInt(roman)); // 1994
