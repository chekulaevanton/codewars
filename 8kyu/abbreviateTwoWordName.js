function abbrevName(name){
  let names = name.split(' ');
  let abbrev = (names[0][0] + '.' + names[1][0]).toUpperCase();
  return abbrev;
}