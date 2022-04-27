class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((p, n) => (p < n ? p : n));
  }
}
