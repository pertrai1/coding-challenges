Array.prototype.last = function() {
  const n = this.length;
  if (this.length === 0) {
    return -1;
  }
  return this[n - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */