function isValidWalk(walk) {
  const d = { n: 0, s: 0, e: 0, w: 0 };
  walk.forEach((v) => d[v]++);
  return d.n == d.s && d.e == d.w && walk.length == 10;
}
