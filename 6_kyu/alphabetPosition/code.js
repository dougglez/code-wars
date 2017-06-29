function alphabetPosition(text) {
  let str = text.toLowerCase().split(''), alpha = 'abcdefghijklmnopqrstuvwxyz';
  return str.map((v, i) => alpha.indexOf(v) +1 || '').filter(v => v).join(' ');
}
alphabetPosition('77])ky]$');
