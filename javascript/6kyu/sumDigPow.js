function sumDigPow(a, b) {
  let nums = [];

  for (let number = a; number <= b; number++) {
    let power = 1;
    let summa = 0;
    for (let digit of Array.from(number.toString())) {
      summa += digit**power;
      power++;
    }
    if (number === summa) nums.push(number);
  }

  return nums;
}