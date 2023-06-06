// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  // Check to see if the two objects have same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // array of keys
  const keys = Object.keys(object1);
  
  // loop for checking the primitves of each key
  for (let value of keys) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])){
      return eqArrays(object1[value],object2[value]);
    } 
    else if (object1[value] !== object2[value]){
      return false;
    }
  }
  
  return true;

};

module.exports = eqObjects;



