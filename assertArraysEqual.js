const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne,arrayTwo) {
  const result = eqArrays(arrayOne,arrayTwo);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
}

module.exports = assertArraysEqual;


