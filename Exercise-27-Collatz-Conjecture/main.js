function collatzLength(n) {
  if (
    typeof n !== "number" ||
    isNaN(n) ||
    !isFinite(n) ||
    parseInt(n) !== n ||
    n < 1
  ) {
    return null;
  }

  var length = 1;
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    length++;
  }

  return length;
}
