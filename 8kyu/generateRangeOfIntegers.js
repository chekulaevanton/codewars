function generateRange(min, max, step){
  let range = [];

  for (min; min <= max; min += step) {
    range.push(min);
  }
  
  return range;
}