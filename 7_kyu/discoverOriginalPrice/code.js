function discoverOriginalPrice(discountedPrice, salePercentage){
  var num = discountedPrice * (100 / (100 - salePercentage));
  if (Math.trunc(num) !== num) {
    num = Number(num.toFixed(2));
  } 
  return num;
}