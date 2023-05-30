const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arrayOne,arrayTwo) {
  let equal = true;

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      equal = false;
    }
  }
  return equal;
}




assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, '3'], [1, 2, 3]), false);
assertEqual(eqArrays([0, 2, 3], [false, 2, 3]), false);