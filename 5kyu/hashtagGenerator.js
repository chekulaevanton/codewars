function generateHashtag (str) {
  let hashTag = '#' + str.split(' ')
                         .map(value => value.slice(0, 1).toUpperCase() + value.slice(1))
                         .join('');
  return (hashTag.length < 141 && !(hashTag.length === 1)) ? hashTag : false;
}