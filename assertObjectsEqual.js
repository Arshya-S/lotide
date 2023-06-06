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

