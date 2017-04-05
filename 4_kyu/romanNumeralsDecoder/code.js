function solution(str){
  var add = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
      },
      subtract = {
        I: {V: true, X: true},
        X: {L: true, C: true},
        C: {D: true, M: true},
      },
      total = 0;
  for (let i = 0; i < str.length; i++) {
    let current = str[i], next = str[i+1];
    if (subtract[current] && subtract[current][next]) {
      total -= add[current];
    } else {
      total += add[current];
    }
  }
  return total;
}