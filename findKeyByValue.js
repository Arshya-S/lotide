// function for finding key by value
const findKeyByValue = function(inputObject, value) {
  
  // loop through keys in object
  for (let key in inputObject) {
    // check if key value matches user inputed value
    if (inputObject[key] === value){
      // return key if value matches
      return key;
    }
  }

};

module.exports = findKeyByValue;




