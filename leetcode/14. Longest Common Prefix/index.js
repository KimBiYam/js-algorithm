/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  const base = strs[0];

  for (let i = 0; i < base.length; i++) {
    // prefix를 찾는 로직이지만 prefix 문자열을 늘려나가는 방식이 아니라 하나씩 줄여나가는 방식으로 진행
    const prefix = base.slice(0, base.length - i);

    for (let j = 0; j < strs.length; j++) {
      const current = strs[j];

      if (!current.startsWith(prefix)) {
        break;
      }

      // 배열의 모든 문자열이 해당 prefix 통과하는 경우 바로 리턴
      if (j === strs.length - 1) {
        return prefix;
      }
    }
  }

  return "";
};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); // fl
