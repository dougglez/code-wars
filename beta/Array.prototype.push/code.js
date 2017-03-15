Array.prototype.push = function(val) {
  this[this.length] = val;
  return this.length;
}