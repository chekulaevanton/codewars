var number = function (busStops) {
  return busStops.reduce((p, c) => p + c[0] - c[1], 0);
};
