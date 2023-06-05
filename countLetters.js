const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {
  let count = {}
  let stringLower = string.toLowerCase();
  for (let element of stringLower) {
    if (element !== ' '){
      if (count[element]) {
        count[element] ++;
      } else {
        count[element] = 1;
      }
    }
  }

  return count;
}

module.exports = countLetters;

let myString = "Lighthouse in the house";
console.log(countLetters(myString));
