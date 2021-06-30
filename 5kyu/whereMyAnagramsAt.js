function anagrams(word, words) {
  let wordsAndChars = new Map();
  let chars = word.split('').sort()
  for (let w of words) {
    wordsAndChars.set(w, w.split('').sort());
  }
  let anag = [];
  for (let [w, c] of wordsAndChars) {
    if (chars == c) anag.push(w);
  }
  return anag;
}

// тут можно было сильно оптимизировать, но мне было лень, будет много ненужного кода