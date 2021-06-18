function getCount(str) {
  var vowelsCount = 0;
  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  for (let char of str) {
    if (vowels.has(char)) {
        vowelsCount++;
    }
  }
  
  return vowelsCount;
}

