function peacefulYard(yard, minDistance) {
  let str = yard.filter(v => v.indexOf('R') == -1 && v.indexOf('M') == -1 && v.indexOf('L') == -1)[0];
  let xYCoords = [];
  yard.map((v,i) => {
    let r, m, l;
    if (v != str) {
      r = v.indexOf('R');
      m = v.indexOf('M');
      l = v.indexOf('L');
      if (r > -1) {
        xYCoords.push([i, r]);
      }
      if (m > -1) {
        xYCoords.push([i, m]);
      }
      if (l > -1) {
        xYCoords.push([i, l]);
      }
    }
  });
  if (xYCoords.length < 2) {
    return true;
  } else {
    let cat1_cat2_x = Math.abs(xYCoords[0][0] - xYCoords[1][0]),
        cat1_cat2_y = Math.abs(xYCoords[0][1] - xYCoords[1][1]),
        hype_cat1_cat2 = Math.sqrt(Math.pow(cat1_cat2_x,2) + Math.pow(cat1_cat2_y,2));
    if (xYCoords.length == 3) {
      let cat2_cat3_x = Math.abs(xYCoords[1][0] - xYCoords[2][0]),
          cat1_cat3_x = Math.abs(xYCoords[0][0] - xYCoords[2][0]),
          cat2_cat3_y = Math.abs(xYCoords[1][1] - xYCoords[2][1]),
          cat1_cat3_y = Math.abs(xYCoords[0][1] - xYCoords[2][1]),
          hype_cat2_cat3 = Math.sqrt(Math.pow(cat2_cat3_x,2) + Math.pow(cat2_cat3_y,2)),
          hype_cat1_cat3 = Math.sqrt(Math.pow(cat1_cat3_x,2) + Math.pow(cat1_cat3_y,2));
      if (hype_cat2_cat3 < minDistance || hype_cat1_cat3 < minDistance) {
        return false;
      }
    }
    if (hype_cat1_cat2 >= minDistance) {
      return true;
    } else {
      return false;
    }
  }
}