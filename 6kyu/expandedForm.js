function expandedForm(num) {
  let digits = num.toString().split('');
  digits = digits.map( (value, index, array) => value * 10**(array.length - (index + 1)));
  digits = digits.filter( (value) => !!value )
  return digits.join(' + ');
}