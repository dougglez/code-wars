const countCows = n => {
  if (typeof(n) === "number") {
    var year = 0,
    adult = 0,
    year2 = 0,
    year1 = 0,
    born = 1;
    for (var i = 1; i <= n; i++) {
      year = i;
      adult += year2;
      year2 = year1;
      year1 = born;
      born = adult;
    }
    var totalCows = adult + year2 + year1 + born;
    return totalCows;
    } else {
      return null;
    }
};

countCows(0); // should equal 1
countCows(1); // should equal 1
countCows(3); // should equal 2
countCows(4); // should equal 3
countCows(10);// should equal 28
countCows(11);// should equal 41
countCows([]);// should equal null
countCows({});// should equal null