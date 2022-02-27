var countBits = function(n) {
  return +n.toString(2).split("").reduce((prev, cur) => +prev + +cur)
};

console.log(countBits(0)) // 0
console.log(countBits(4)) // 1
console.log(countBits(7)) // 3
console.log(countBits(9)) // 2
