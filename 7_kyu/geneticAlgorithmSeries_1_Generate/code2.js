const generate = length => {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 2));
  }
  return arr.join('');
};