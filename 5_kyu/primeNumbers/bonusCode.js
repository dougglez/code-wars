// ************ NOT MY CODE ************* \\
// I found this to be a wonderfully interesting solution.

//Uses an ever-expanding Sieve of Eratosthenes to test for primes
var sieve = [2, 3, 5, 7, 11];

function validPrimeCheck(num) {
  generateSieve(Math.ceil(Math.sqrt(num)));
  return isPrimeFromSieve(num);
}

function generateSieve(max) {
  var current = sieve[sieve.length - 1] + 2;
  while (current <= max) {
    if (isPrimeFromSieve(current)) {
      sieve.push(current);
    }
    current += 2;
  }
}

function isPrimeFromSieve(num) {
  var max = Math.ceil(Math.sqrt(num));
  for (var i = 0; i < sieve.length; i++) {
    if (num % sieve[i] === 0) {
      return false;
    } else if (max < sieve[i]) {
      return true;
    }
  }
  return true;
}

function closeIndex(val, high) {
  var index = sieve.indexOf(val);
  if (index > -1) { return high ? index + 1 : index; }
  for (var i = 0; i < sieve.length; i++) {
    if (val < sieve[i]) {
      break;
    }
  }
  return i;
}

function isPrime(num) {
  if (num < 2 || (num % 2 == 0 && num !== 2)) {
    return false;
  } else {
    if (sieve.indexOf(num) !== -1) {
      return true;
    } else {
      return validPrimeCheck(num);
    }
  }
}

function getPrimes(start, finish) {
  if (start == finish) { return []; }
  var larger = start > finish ? start : finish, smaller = start > finish ? finish : start;
  generateSieve(larger);
  return sieve.slice(closeIndex(smaller, false), closeIndex(larger, true));
}
