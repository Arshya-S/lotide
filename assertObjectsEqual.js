const eqObjects = function(object1, object2) {
  
  // Check to see if the two objects have same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // array of keys
  const keys = Object.keys(object1);
  
  // loop for checking the primitves of each key
  for (let value of keys) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])){
      return eqArrays(object1[value],object2[value]);
    } 
    else if (object1[value] !== object2[value]){
      return false;
    }
  }
  return true;
};




const assertObjectsEqual = function(actual,expected) {
  // formatting of console log of objects to appear nicer
  const inspect = require('util').inspect;
  const result = eqObjects(actual,expected);

  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ob1 = {a: 1, b: 2}
const ob2 = {a: 1, b: 2}

assertObjectsEqual(ob1,ob2);
