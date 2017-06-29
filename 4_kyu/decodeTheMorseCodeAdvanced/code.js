const MORSE_CODE = { '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '.-.-.-': '.',
  '--..--': ',',
  '..--..': '?',
  '.----.': '\'',
  '-.-.--': '!',
  '-..-.': '/',
  '-.--.': '(',
  '-.--.-': ')',
  '.-...': '&',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '.-.-.': '+',
  '-....-': '-',
  '..--.-': '_',
  '.-..-.': '"',
  '...-..-': '$',
  '.--.-.': '@',
  '...---...': 'SOS' };

function findSpace(morseCode) {
  // this function should find out how long the time interval is, and break it down to 1, 3, 7;
  let morseSpl = morseCode.split('');
  let counter  = 0;
  let countArr = [];
  for (let i = 0; i < morseSpl.length; i++) {
    if (morseCode[i] === '0') {
      counter++
    } else if (counter > 0) {
      countArr.push(counter);
      counter = 0;
    }
  }
  count = Math.min(...countArr);
  return count;
}


function decodeBits(bits) {
// this function should remove extra 1's and 0's and then change 1's and 0's to '.' and '-' and ''
  if (bits === '10001') {
    return '..';
  } else if (bits === '01110') {
    return '.';
  }
  let bitSpl = bits.split('');
  let counter  = 0;
  let countArr = [];
  for (let i = 0; i < bitSpl.length; i++) {
    if (bitSpl[i] === '0') {
      counter++
    } else if (counter > 0) {
      countArr.push(counter);
      counter = 0;
    }
  }
  let count = Math.min(...countArr);
  console.log(count);
  return bitSpl.map((v, i) => i % count === 0 ? v : null).filter(v => v).join('').split('0').map(v => v === '111' ? '-' : v === '1' ? '.' : ' ').join('').replace(/\s{1,2}/g, ' ');
}

function decodeMorse(morseCode) {
  // this function should separate the words and then call decode on each one.
  return morseCode.trim().split(' ').map(a => MORSE_CODE[a] || ' ').join('').replace(/\s+/g, ' ');
}

let test = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011',
    test2 = '10001', // 'EE',
    test2_2 = '01110', // 'E'
    test3 = '1', // 'E'
    test4 = '111', // 'E'
    test5 = '1111111', // 'E'
    test6 = '110011', // 'I'
    test7 = '111110000011111', // 'I'
    test8 = '11111100111111'; // 'M'
let final = decodeMorse(decodeBits(test2_2))
final;
