function partsSums(ls) {
  let sums = [0];
  let summa = 0
  let length = ls.length - 1;

  while (length >= 0) {
    summa += ls[length];
    sums.push(summa);

    length--;
  }

  return sums.reverse();
}