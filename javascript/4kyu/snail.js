function snail(arr) {
  if (arr[0][0] === undefined) return [];

  const sliceFrame = function(array) { 
    return array.slice(1, -1)
                .map( value => value.slice(1, -1) ); 
  };
  const topSide = function(array) { return array[0]; };
  const bottomSide = function(array) { return array[array.length - 1].reverse(); };
  const leftSide = function(array) { 
    let side = [];
    for (let i = array.length - 2; i >= 1; i--) side.push(array[i][0]);
    return side;
  };
  const rightSide = function(array) { 
    let side = [];
    for (let i = 1; i <= array.length - 2; i++) side.push(array[i][array.length - 1]);
    return side;
  };
  const frame = function(array) {
    let frame = [];
    frame.push(...topSide(array));
    frame.push(...rightSide(array));
    frame.push(...bottomSide(array));
    frame.push(...leftSide(array));
    return frame;
  }

  let array = arr.slice();
  let snail = [];

  while (true) {
    if (array.length === 2) {
      snail.push(...array[0]);
      snail.push(...array[1].reverse());
      break;
    }

    if (array.length === 1) {
      snail.push(array[0][0]);
      break;
    }

    snail.push(...frame(array));
    array = sliceFrame(array);
  }

  return snail;
}