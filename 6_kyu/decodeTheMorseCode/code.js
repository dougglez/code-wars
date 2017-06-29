decodeMorse = function(morseCode){
  let morseSpl = morseCode.split(' '), decoded = [];
  for ( let i = 0; i < morseSpl.length; i++) {
    let v = morseSpl[i], v1 = morseSpl[i + 1];
    if (!v && !v1 || !v && i === 0) {
      morseSpl.splice(i, 1);
      i--;
    } else {
      decoded.push(MORSE_CODE[v] || ' ');
    }
  }
  return decoded.join('');
}

decodeMorse = function(morseCode){
  return morseCode.trim().split(' ').map(a => MORSE_CODE[a] || ' ').join('').replace(/\s+/g, ' ');
}
