function sumArray(array) {
  return !array || array.length <= 1 ? 0 : array.reduce((a, b)=>a+b,0) - (Math.max(...array) + Math.min(...array))
}