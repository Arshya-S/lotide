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

const middle = function(array) {
  let output = [];
  
  if (array.length == 1 || array.length == 2) {
    return output;
  }

  if (array.length % 2 === 0) {
    let middle = array.length / 2;
    output.push(array[middle - 1]);
    output.push(array[middle]);
    return output;
  } 

  let middle = Math.floor(array.length / 2);
  output.push(array[middle]);
  return output;

}


// Tests
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1,2]), []);

assertArraysEqual(middle([1]), []);


