function cipher(key, msg) {
  return msg.split('').map(v => v.match(/[a-zA-Z]/g) ? String.fromCharCode(v.charCodeAt(0) - key%26) : v).join('');
}

let answer = cipher(54, 'Hello There, My Name Is Jesse');
answer; // should return => Fcjjm Rfcpc, Kw L_kc Gq Hcqqc