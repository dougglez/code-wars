const findVowel = (str) => {
  return str.filter(v=> (/[aeiou]/).test(v))[0];
};

const pigLatin = word => {
  if ((/[0-9]/).test(word)) {
    return null;
  } 
  var strSpl = word.toLowerCase().split(''),
      test = (/[aeiou]/).test(strSpl[0]),
      splicedConsonants = strSpl.splice(0, strSpl.indexOf(findVowel(strSpl)) ).join('') + 'ay';
  strSpl.push( test ? 'way' : splicedConsonants );
  return strSpl.join( '' );
}