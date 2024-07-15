const sumAll = function(minInteger, maxInteger) {
  let finalSum = 0; 
let larger = Math.max(minInteger, maxInteger);
let smaller = Math.min(minInteger, maxInteger); 
if (typeof minInteger !="number" || typeof maxInteger != "number") {
  return "ERROR"; 
} else if ((larger >= 0) && (smaller >= 0)) {
  for (let i = smaller; i <= larger; i++) {
    finalSum += i;
  }
} else return "ERROR"; 
return finalSum; 
}

// Do not edit below this line
module.exports = sumAll;
