const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


assertEqual(eqArrays([1,2],[1,2]), true);
assertEqual(eqArrays([1,3],[1,2]), false);
assertEqual(eqArrays([1,2,3],[1,2]), false);



