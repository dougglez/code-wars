function isPrime(num) {
  //TODO
  if (num < 2) {
    return false;
  } else {
    var arr = [...Array(num)].map((v, i) => i+1);
    arr.shift()
    var isPrime = Number(arr.filter((v) => !(num%v)))
    return isPrime ? true : false
  }
}