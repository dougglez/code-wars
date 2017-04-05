const generate = length => {
  return [...Array(length)].map((v)=>v = Math.floor(Math.random() * 2)).join('')
};