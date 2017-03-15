const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  if (n === 2 || n === 3) {
    return true;
  }
  for (var i = n - 1; i > 1; i--) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const looper = (a, b) => {
  let primes = [];
  for (let i = a; i <= b; i++) {
    isPrime(i) ? primes.push(i) : null
  }
  return primes;
};

const getPrimes = (a, b) => a > b ? looper(b, a) : looper(a, b);