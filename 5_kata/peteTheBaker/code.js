function cakes(recipe, available) {
  // TODO: insert code
  var result = [];
  for (var prop in recipe) {
      var availableProp = available[prop] || 0;
      var recipeProp = recipe[prop] || 0;
      //console.log('availableProp:' + availableProp);
      //console.log('recipeProp:' + recipeProp);
      if (recipeProp > 0) {
          result.push(Math.floor(availableProp / recipeProp));
      }
  }
  return Math.min.apply(Math, result);
}