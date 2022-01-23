function powersOfTwo(n){
  let powers = [];
  for (let power = 0; power <= n; power++) {
    powers.push(2 ** power);
  }
  return powers;
}