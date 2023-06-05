const eqArrays = function(arrayOne,arrayTwo) {
  let equal = true;

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      equal = false;
    }
  }
  return equal;
}
const assertArraysEqual = function(arrayOne,arrayTwo) {
  const result = eqArrays(arrayOne,arrayTwo);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
  
}

const takeUntil = function(array, callback) {
  const result = [];
  for (const element of array) {
    if (!callback(element)){
      result.push(element);
    } else {
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;



// Input:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2]);



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);




// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]