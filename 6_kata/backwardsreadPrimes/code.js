function isPrime(num) {
    if(num <= 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i===0) {
            return false;
        }
    }
    return true;
}
function reverse(num) {
  return Number(num.toString().split('').reverse().join(''));
}

 function backwardsPrime(start, stop) {
     var primeNumbers = [];
     var finalPrimes = [];
     for(var i = start; i <= stop; i++){
        // Code Here
      	if (isPrime(i)) {
            primeNumbers.push(i);
        }
     }
     for (var j = 0; j < primeNumbers.length; j++) {
        if(isPrime(reverse(primeNumbers[j])) && reverse(primeNumbers[j]) !== primeNumbers[j]) {
          finalPrimes.push(primeNumbers[j]);
        }
      }
      return finalPrimes;
 }