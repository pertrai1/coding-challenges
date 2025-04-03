Object.defineProperty(Array.prototype, 'last', {
    value: function() {
        const n = this.length;
        return n ? this[n - 1] : -1
    },
    enumerable: false
  });


/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */