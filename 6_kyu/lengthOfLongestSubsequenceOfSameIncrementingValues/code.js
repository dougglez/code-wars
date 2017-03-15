// if arr[i+1] - arr[i] === arr[i] - arr[i-1]
//counter ++
// if counter > longest
// counter = longest

//counter is set to 2:
    // need to compare (i - (i-1)) === ((i-1) - (i-2))
    // means we need to start i at 1
    // setting counter === 2 is done to account for the first and last number that will be missed

function longest(arr) {
  // change string of numbers into array of numbers
  if (!arr) {
    return 0;
  } else {
      // changing from string of numbers "1 2 3 4 5"
      // to array of integers [1,2,3,4,5]
  arr = arr.split(' ').map(function(e) {
    return parseInt(e, 10);
  });
  // if arr has less than 2 numbers, return length of arr
  if (arr.length > 2) {
  // create variables to hold  a counter and the longest running count 
    var counter = 2;
    var long = 2;
    for (var i = 1; i < arr.length; i++) {
      console.log('i is: ', i, '&&', 'arr[i] is: ', arr[i]);
      // console.log('arr[i] is: ', arr[i]);
      if (arr[i] - arr[i - 1] === arr[i - 1] - arr[i - 2]) {
        counter++;
        console.log('counter is now: ', counter, '&&', 'long: ', long);
        // console.log('long: ', long);
        if (counter > long) {
          long = counter;
          console.log('long updated to: ', long);
        } 
      } else {
        counter = 2;
        console.log('counter reset to: ', counter);
      }
    } return long;
  } else {
      return arr.length;
    }
  }
}

// tests
var eight = "0 1 2 3 4 5 6 7 5 4 3 2 7 5 3 1 15 12 9 6 3"; //8
var zero = ""; //0
var one = "2"; //1
var two = "1 2"; //2
var ten = "1 2 3 4 5 65 34 12 23 2 4 6 8 10 12 14 16 18 20 5 15 45" //10
// longest(zero);
// longest(one);
// longest(two);
// longest(ten);
// longest(eight);

// <<< EXTRA >>> \\
// make this work with multiplication ie "1 3 9"
// 1 * 3 = 3 && 3 * 3 = 9
// "2 8 32 128 512 2048"  (multiplied by 4)
// only way i can think of doing this is to just repeat that for loop using divide instead of subtract