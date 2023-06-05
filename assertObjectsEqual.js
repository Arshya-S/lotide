const eqObjects = require('./eqObjects');




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

module.exports = assertObjectsEqual;

const ob1 = {a: 1, b: 2}
const ob2 = {a: 1, b: 2}

assertObjectsEqual(ob1,ob2);
