const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');


const result = ["Hello", "Lighthouse", "Labs"];
assertArraysEqual(tail(result), ["Lighthouse", "Labs"]); 


const words = ['1', '2', 'hello', 'hi'];
assertArraysEqual(tail(words), ['2', 'hello', 'hi']);
