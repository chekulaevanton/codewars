function sumStrings(a, b) {
  const normalizeNum = function(arr) {
    let firstNotZeroIndex;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] !== '0') {
        firstNotZeroIndex = i;
        break;
      }
    }
    return arr.slice(0, firstNotZeroIndex + 1);
  };

  let firstNum = normalizeNum(a.split('').reverse());
  let secondNum = normalizeNum(b.split('').reverse());
  let maxLength = Math.max(firstNum.length, secondNum.length);

  let carry = 0;
  let result = [];

  for (let i = 0; i <= maxLength; i++) {
    let firstDigit = +firstNum[i] || 0;
    let secondDigit = +secondNum[i] || 0;

    let resultDigit = (firstDigit + secondDigit + carry) % 10;
    carry = Math.trunc((firstDigit + secondDigit + carry) / 10);

    if (i === maxLength && resultDigit === 0) continue;
    result.push(resultDigit.toString());
  }

  return result.reverse().join('');
}