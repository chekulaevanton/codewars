function formatDuration(seconds) {

  if (seconds === 0) return 'now';

  let sec = seconds % 60;
  let min = Math.floor(seconds / 60) % 60;
  let h = Math.floor(seconds / 3600) % 24;
  let d = Math.floor(seconds / 86400) % 365;
  let y = Math.floor(seconds / 31536000) % 365;

  let strings = [];

  let pushToStrings = (number, str) => {
    if (number) {
      let string;
      (number > 1) ? string = number + str + 's' : string = number + str;
      strings.push(string);
    };
  };

  pushToStrings(y, ' year');
  pushToStrings(d, ' day');
  pushToStrings(h, ' hour');
  pushToStrings(min, ' minute');
  pushToStrings(sec, ' second');

  if (strings.length === 1) return strings[0];
  let outputStrings = [];
  outputStrings.push(strings.slice(0, -1).join(', '), strings[strings.length - 1]);
  
  return outputStrings.join(' and ');
}



