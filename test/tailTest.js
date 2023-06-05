const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');


const result = ["Hello", "Lighthouse", "Labs"];
assertArraysEqual(tail(result), ["Lighthouse", "Labs"]); 


const words = ["Yo Yo", "Lighthouse", "Labs"];
assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);
