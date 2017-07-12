var Hamming = function () {};
  Hamming.prototype.compute = function(a, b) {
    var count = 0;
    if (a.length !== b.length) {
      return 'Error: DNA strands must be of equal length.'
    }
      for (var i = 0; i <= a.length; i++) {
        if (a.charAt(i) !== b.charAt(i)) {
          count += 1;
        }
    }
    return count;
};

module.exports = Hamming;
