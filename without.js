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


const without = function(source,itemsToRemove) {
  let newArray= [];
  
  for (let element of source) {
    if (!itemsToRemove.includes(element)){
      newArray.push(element);
    }
  }
  return newArray;
}

// Tests using assertArraysEqual
assertArraysEqual(without([1,2,3],[1]), [2,3]);
assertArraysEqual(without([1,2,3],[1,2,3]), []);
assertArraysEqual(without([1,2,3],[]), [1,2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);