const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object,callback) {
  for (const key in object) {
    if (callback(object[key])){
      return key;
    }
  }
};

// Tests

module.exports = findKey;




assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"


assertEqual(findKey({'a': {value: 1}, 'b': {value: 2}, 'c': {value: 3}}, x => x.value === 3), 'c');
assertEqual(findKey({'a': {value: 30}, 'b': {value: -2}, 'c': {value: 20}}, x => x.value >10), 'a');









