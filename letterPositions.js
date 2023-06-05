
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



const letterPositions = function(sentence) {
  const results = {};
  let newSentence = sentence.toLowerCase();

  for (let i in newSentence) {
    if (newSentence[i] !== ' ') {
      if (results[newSentence[i]]){
        results[newSentence[i]].push(Number(i));
      } else {
        results[newSentence[i]] = [];
        results[newSentence[i]].push(Number(i));
      }
    }
  }
  return results;
};

module.exports = letterPositions;


assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2,3]);
