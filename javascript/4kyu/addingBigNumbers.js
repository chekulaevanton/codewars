function add(a, b) {
  let firstNum = a.split('').reverse();
  let secondNum = b.split('').reverse();
  let maxLength = ((a, b) => (a > b) ? a : b)(firstNum.length, secondNum.length);

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