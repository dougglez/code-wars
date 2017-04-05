// calculate the bowling score by looking backwards

// if v is a strike || spare, add 10

  // if v - 1 is a strike, add 10
    // if v - 2 is a strike, add 10
  // if v-1 is a spare, add 10

// otherwise, add v[0] + v[1]

function bowlingScore(frames) {
  var spl = frames.split(' '),
      score = 0;
  for(var i = 0; i < spl.length; i++) {
    var v = spl[i],
        v1 = spl[i-1],
        v2 = spl[i-2],
        frame = 0,
        nv0 = Number(v[0]),
        nv1 = Number(v[1]),
        nv2 = Number(v[2]);
    console.log(`---- v: ${v}, v1: ${v1}, v2: ${v2} ----`);
        
    //check for 9th frame first
    
    if (i === 9) {
      console.log("we're in the 10th frame, rules change here");
      
      if(v === 'XXX') {
        score += 30;
        console.log(`Turkey! i: ${i}, v: ${v}, score: ${score}`);
        if (v1 === 'X') {
          score += 20;
        console.log(`4 strikes i: ${i}, v: ${v}, score: ${score}`);
         if (v2 === 'X') {
          score += 10;
        console.log(`5 strikes i: ${i}, v: ${v}, score: ${score}`);
          }
        } else if (v1[1] === '/') {
          score += 10;
        console.log(`i: ${i}, v: ${v}, score: ${score}`);
        }
        
        // ['X**']
      } else if (v[0] === 'X') {
        score += 10;
        console.log('---- Checking previous frames ----');
        if (v1 === 'X') {
          score += 10;
          console.log('Last frame was a stike!', `i: ${i}, v: ${v}, score: ${score}`);
          if (v2 === 'X') {
            score += 10;
            console.log('Two frames were stikes!', `i: ${i}, v: ${v}, score: ${score}`);
          }
        } else if (v1[1] === '/') {
          score += 10;
          console.log('Last frame was a spare!', `i: ${i}, v: ${v}, score: ${score}`);
        }
        console.log(`1 strike i: ${i}, v: ${v}, score: ${score}`);
        //strike, strike, miss ie. ie. ['XX8']
        // ['XX*']
          if (v[1] === 'X') {
            score += (10 + nv2);
            console.log('---- Checking previous frames ----');
            if (v1 === 'X') {
              score += 10;
              console.log('Last frame was a stike!', `i: ${i}, v: ${v}, score: ${score}`);
            }
            console.log(`v[1] is a strike! ${v[1]} i: ${i}, v: ${v}, score: ${score}`);
          
            // strike,  spare ['X4/']
            // ['X*/']
          } else if (v[2] === '/') {
            score += 10;
        console.log(`i: ${i}, v: ${v}, score: ${score}`);
            
            // strike, open frame ie. ['X44']
          } else {
            score += (nv1 + nv2);
        console.log(`i: ${i}, v: ${v}, score: ${score}`);
          }
          
          
          // if ['8/*']
      } else if (v[1] === '/') {
        score += frame = 10;
        console.log('you got a spare in the 10th frame', "score: ", score)
        console.log('---- Checking previous frames ----');
        if (v1 === 'X') {
          score += frame;
          console.log('Last frame was a stike!', `i: ${i}, v: ${v}, score: ${score}`);
          if (v2 === 'X') {
            score += nv0;
            console.log('Two frames were stikes!', `i: ${i}, v: ${v}, score: ${score}`);
          }
        } else if (v1[1] === '/') {
          score += nv0;
          console.log('Last frame was a spare!', `i: ${i}, v: ${v}, score: ${score}`);
        }
        console.log(`i: ${i}, v: ${v}, score: ${score}`);
        
        // ['8/X']
        if (v[2]=== 'X') {
          score += 10;
        console.log(` A spare and a strike in the 10th?! i: ${i}, v: ${v}, score: ${score}`);
          // ['8/8']
        } else {
          score += nv2;
        console.log(`i: ${i}, v: ${v}, score: ${score}`);
        }
        // ['44']
      } else {
        score += frame = nv0 + nv1;
        console.log('---- Checking previous frames ----');
        if (v1 === 'X') {
          score += frame;
          console.log('Last frame was a stike!', `i: ${i}, v: ${v}, score: ${score}`);
          if (v2 === 'X') {
            score += nv0;
            console.log('Two frames were stikes!', `i: ${i}, v: ${v}, score: ${score}`);
          }
        } else if (v1[1] === '/') {
          score += nv0;
          console.log('Last frame was a spare!', `i: ${i}, v: ${v}, score: ${score}`);
        }
        console.log(`i: ${i}, v: ${v}, score: ${score}`);
      }
    
    
    // check for other frames
    // if curFrame = strike or spare
    } else {
      if (v === 'X') {
        score += frame = 10;
        console.log(`You got a strike! i: ${i}, v: ${v}, score: ${score}`);
        console.log('---- Checking previous frames ----');
        if (v1 && v1 === 'X') {
          score += frame;
          console.log('Last frame was a stike!', `i: ${i}, v: ${v}, score: ${score}`);
          if (v2 && v2 === 'X') {
            score += frame;
            console.log('Two frames were stikes!', `i: ${i}, v: ${v}, score: ${score}`);
          }
        } else if (v1 && v1[1] === '/') {
          score += frame;
          console.log('Last frame was a spare!', `i: ${i}, v: ${v}, score: ${score}`);
        }
        console.log(`Finished adding frames! i: ${i}, v: ${v}, score: ${score}`);
      } else if (v[1] === '/') {
        score += frame = 10;
        console.log('---- Checking previous frames ----');
        if (v1 && v1 === 'X') {
          score += frame;
          console.log('Last frame was a stike!', `i: ${i}, v: ${v}, score: ${score}`);
          if (v2 && v2 === 'X') {
            score += nv0;
            console.log('Two frames were stikes!', `i: ${i}, v: ${v}, score: ${score}`);
          }
        } else if (v1 && v1[1] === '/') {
          score += nv0;
          console.log('Last frame was a spare!', `i: ${i}, v: ${v}, score: ${score}`);
        }
      } else {
          score += frame = nv0 + nv1;
        console.log(`i: ${i}, v: ${v}, score: ${score}`);
        console.log('---- Checking previous frames ----');
        if (v1 && v1 === 'X') {
          score += frame;
          console.log(`Last frame was a stike! i: ${i}, v: ${v}, score: ${score}`);
          if (v2 && v2 === 'X') {
            score += nv0;
            console.log(`Two frames were stikes! i: ${i}, v: ${v}, score: ${score}`);
          }
        } else if (v1 && v1[1] === '/') {
          score += nv0;
          console.log(`Last frame was a spare! i: ${i}, v: ${v}, score: ${score}`);
        } //closing pf else if
      } //closing else 
    }
    switch (i) {
      case 0:
        console.log(`score should be: 7`);
        break;
      case 1:
        console.log(`score should be: 16`);
        break;
      case 2:
        console.log(`score should be: 21`);
        break;
      case 3:
        console.log(`score should be: 27`);
        break;
      case 4:
        console.log(`score should be: 35`);
        break;
      case 5:
        console.log(`score should be: 41`);
        break;
      case 6:
        console.log(`score should be: 51`);
        break;
      case 7:
        console.log(`score should be: 58`);
        break;
      case 8:
        console.log(`score should be: 68`);
        break;
      case 9:
        console.log(`score should be: 98`);
        break;
        default:
        console.log(`this shouldn't be logged`)
    }
  }
return score;
}
bowlingScore('25 18 50 24 44 15 9/ 23 X 1/X') 
//            0  1  2  3  4  5  6  7  8  9
//   0     1     2     3     4     5     6     7     8     9 
//   7     9     5     6     8     6    10     0502 10  101010
//   7    16     21    27   35     41   51     58    68    98
//should be a 98 - Expected: 98, instead got: 88
// bowlingScore('X X 9/ 80 X X 90 8/ 7/ 44')
//               0 1 2  3  4 5 6  7  8  9 
//   0      1      2      3     4      5      6     7      8      9
//  10   1010   101009   0808  10    1010   090909 10     1007  0804
//  10    20      29      16   10     20      27   10      17     12
//  10    30      59      75   85     105   132    142    159    171
// bowlingScore('X X 9/ 80 X X 90 8/ 7/ X44')
//            0 1 2  3  4 5 6  7  8  9
//        //29 20 18 8 29 19 9 17 20 18
//      //29 49 67 75 104 123 132 149 169 => 187
// bowlingScore('X X X X X X X X X XXX')
// bowlingScore('10 20 30 40 50 60 70 80 90 00')