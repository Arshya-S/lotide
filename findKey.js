const findKey = function(object,callback) {
  for (const key in object) {
    if (callback(object[key])){
      return key;
    }
  }
};

// Tests

module.exports = findKey;









