function findUniq(arr) {
  c = new Map();
  arr.forEach(num => {
    c.get(num) === undefined ? c.set(num, 1) : c.set(num, c.get(num) + 1);
  });
  for (const e of c.entries()) {
    if (e[1] === 1) return +e[0];
  }
}

console.log(findUniq([0, 1, 0]));
console.log(findUniq([1, 1, 1, 2]));
