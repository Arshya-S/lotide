# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @arshya_s/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first value of array
* `tail`: returns everything but the first value of array
* `assertArraysEqual`: assertion for arrays being equal
* `assertEqual`: assertion for equal values
* `eqArrays`: returns true if arrays are equal, false otherwise
* `assertObjectsEqual`: asserts if two objects are equal or not
* `countLetters`: counts the letters in a string
* `countOnly`: counts the letters that are only in the string
* `eqObjects`: returns true if two objects are equal, false otherwise
* `findKey`: checks if key is in object
* `findKeyByValue`: returns key based on value inputed
* `letterPositions`: returns the posiitons of letters in a string
* `map`: maps values into an input based on a callback function
* `takeUntil`: returns array of elements that satisfy a callback
* `without`: removes elements based on condition