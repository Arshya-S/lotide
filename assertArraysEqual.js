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


assertArraysEqual([1,'2',3],[1,2,3]);
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,5,3],[1,2,3]);


