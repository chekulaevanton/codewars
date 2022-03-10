function shiftedDiff(first,second) {
  let counter = 0;
  while (first !== second) {
    first = first[first.length-1] + first.slice(0,first.length-1)
    counter++
    if (counter == first.length) {
      return -1
    }
  }
  return counter
}
