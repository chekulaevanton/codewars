function ipToNum(ip) {
  ip = ip.split('.');
  let sum = 0;
  for (let i = 0; i < ip.length; i++) {
    sum += +ip[ip.length - i - 1] * 256**i;
  }
  return sum;
}

function numToIp(num) {
  let ip = [];
  for (let i = 0; i < 4; i++) {
    ip.unshift(num % 256);
    num = Math.floor(num /256);
  }
  return ip.join('.');
}
