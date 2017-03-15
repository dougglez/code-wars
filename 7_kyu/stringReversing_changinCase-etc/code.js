function reverseAndMirror(s1,s2) {
  var s1spl = s1.split('');
  var s2spl = s2.split('');
  var sep = '@@@';
  for (var i = 0; i < s1spl.length; i++) {
    if(s1spl[i] !== s1spl[i].toUpperCase()) {
    s1spl[i] = s1spl[i].toUpperCase()
    } else {
      s1spl[i] = s1spl[i].toLowerCase()
    }
  }
  for (var i = 0; i < s2spl.length; i++) {
    if(s2spl[i] !== s2spl[i].toUpperCase()) {
    s2spl[i] = s2spl[i].toUpperCase()
    } else {
      s2spl[i] = s2spl[i].toLowerCase()
    }
  }
  return s2spl.reverse().join('') + sep + s1spl.reverse().join('')+s1spl.reverse().join('');
}