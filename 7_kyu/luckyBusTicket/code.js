function isLucky(ticket) {
  var sum = (start, stop) => {
    return ticket.substr(start, stop).split('').reduce((a, b) => Number(a) + Number(b));
  };
  if ((/^[0-9]{6,6}$/).test(ticket)) {
      return sum(0, 3) === sum(3, 6)
  } else return false ;
}

// TEST CASES \\
isLucky('408534');
isLucky('4085343');
isLucky('40534');
isLucky('408634');