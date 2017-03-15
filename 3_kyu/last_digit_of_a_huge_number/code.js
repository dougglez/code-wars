function lastDigit(as){
  return as.reduceRight(function(exponent, base, index, array) {
    if(exponent === 0) {
      return 1
    } else if(+exponent == 1) {
      return base
    } else {
      return Math.pow(base % 100, +exponent % 4 + 4);
    }
  }, 1) % 10;
}