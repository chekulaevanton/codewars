function sumIntervals(intervals){
  let setOfIntervals = new Set();
  intervals.forEach(element => {
    let [start, end] = element;
    for (start; start < end; start++) setOfIntervals.add(start);
  });
  return setOfIntervals.size;
}