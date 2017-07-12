//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// ```plain
// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
// ```
//
// For example, 1997 is not a leap year, but 1996 is.  1900 is not a leap
// year, but 2000 is.

var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  if (this.year % 4 !== 0) {
    return false
  }

};

module.exports = Year;
