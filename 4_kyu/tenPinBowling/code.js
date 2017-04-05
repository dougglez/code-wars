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
    if (i === 9) {
      if(v === 'XXX') {
        score += 30;
        if (v1 === 'X') {
          score += 20;
         if (v2 === 'X') {
          score += 10;
          }
        } else if (v1[1] === '/') {
          score += 10;
        }
      } else if (v[0] === 'X') {
        score += 10;
        if (v1 === 'X') {
          score += 10;
          if (v2 === 'X') {
            score += 10;
          }
        } else if (v1[1] === '/') {
          score += 10;
        }
          if (v[1] === 'X') {
            score += (10 + nv2);
            if (v1 === 'X') {
              score += 10;
            }
          } else if (v[2] === '/') {
            score += 10;
          } else {
            score += (nv1 + nv2);
          }
      } else if (v[1] === '/') {
        score += frame = 10;
        if (v1 === 'X') {
          score += frame;
          if (v2 === 'X') {
            score += nv0;
          }
        } else if (v1[1] === '/') {
          score += nv0;
        }
        if (v[2]=== 'X') {
          score += 10;
        } else {
          score += nv2;
        }
      } else {
        score += frame = nv0 + nv1;
        if (v1 === 'X') {
          score += frame;
          if (v2 === 'X') {
            score += nv0;
          }
        } else if (v1[1] === '/') {
          score += nv0;
        }
      }
    } else {
      if (v === 'X') {
        score += frame = 10;
        if (v1 && v1 === 'X') {
          score += frame;
          if (v2 && v2 === 'X') {
            score += frame;
          }
        } else if (v1 && v1[1] === '/') {
          score += frame;
        }
      } else if (v[1] === '/') {
        score += frame = 10;
        if (v1 && v1 === 'X') {
          score += frame;
          if (v2 && v2 === 'X') {
            score += nv0;
          }
        } else if (v1 && v1[1] === '/') {
          score += nv0;
        }
      } else {
          score += frame = nv0 + nv1;
        if (v1 && v1 === 'X') {
          score += frame;
          if (v2 && v2 === 'X') {
            score += nv0;
          }
        } else if (v1 && v1[1] === '/') {
          score += nv0;
        }
      }
    }
  }
return score;
}

bowlingScore('X X X X X X X X X XXX') // 300
bowlingScore('25 18 50 24 44 15 9/ 23 X 1/X')  // 98