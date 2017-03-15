function solution(number){
  var threeOr5 = [];
  [...Array(number)].map((v,i)=>i).map(x => {
    x % 5 === 0 ? threeOr5.push(x) : x % 3 === 0 ? threeOr5.push(x) : null;
  });
  return threeOr5.reduce((a, b) => a + b);
}
//test case
solution(30);  // return 195


// even shorter
const solution2 = n => {
   return [...Array(n)].map((v,i)=>i).filter((x) => x % 5 === 0 || x % 3 === 0).reduce((a, b) => a + b);
};
//test case
solution2(10);  // return 23

const solution3 = n => {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

//test case
solution3(10);  // return 23