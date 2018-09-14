module.exports = function getZerosCount(number, base) {
  let powArray = Array();
  let countPowArray = Array();
  let amountArray = Array();
  let i = 2;
  let p = 0;
  let zeros;

  do {
    if (base % i == 0) {
      if (powArray.indexOf(i) < 0) {
        p++;
        powArray.push(i);
        countPowArray.push(1);
      }
      else {
        countPowArray[p-1]++;
      }
      base /= i; 
    } else {
      i++;
    }
  } while (i <= base);
  
  for (i = 0; i < powArray.length; i++) {
    zeros = 0;
    for (let j = 1; Math.floor(number/Math.pow(powArray[i],j)) > 0; j++) {
      zeros += Math.floor(number/Math.pow(powArray[i], j));
    }
    amountArray[i] = zeros;
  }



  zeros = amountArray[0]/countPowArray[0];
  for (i = 1; i <= amountArray.length; i++) {
    if (amountArray[i]/countPowArray[i] < zeros) {
      zeros = amountArray[i]/countPowArray[i];
    }
  }

  return Math.floor(zeros);
  
}