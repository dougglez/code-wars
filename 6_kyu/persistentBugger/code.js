// recursion
var counter = 0;
function persistence(num) {
  let numArr = num.toString(10).split("").map(Number);
  if (numArr.length > 1) {
    counter++;
    return persistence( numArr.reduce((a,b) => a*b) );
  } else {
    return counter;
  }
}

let first = persistence(999);
first
console.log(counter);
 