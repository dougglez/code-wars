function pigIt(str2){

  var str = str2.split(' ');
  var result = [];
   
   for (var i = 0; i < str.length; i++) {
    
     var backEnd = str[i].substring(1);
     var letter = str[i].substring(0, 1);
      
     result.push(backEnd + letter + 'ay');
     }
     
  return result.join(' ');
}