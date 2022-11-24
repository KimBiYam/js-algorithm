/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  let root = 1;

  while (true) {
    const square = root * root;

    if (square === x) {
      return root;
    } else if (square < x && x < (root + 1) * (root + 1)) {
      return root;
    } else if (square < x) {
      root += 1;
    } else if (square > x) {
      return root;
    }
  }
};

mySqrt(4);
