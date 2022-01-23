function humanReadable(seconds) {
  let h = ((Math.floor( seconds / 3600 ) % 100) + 100).toString().slice(1);
  let min = ((Math.floor( seconds / 60 ) % 60) + 100).toString().slice(1);
  let sec = ((seconds % 60) + 100).toString().slice(1);

  return `${h}:${min}:${sec}`;
}