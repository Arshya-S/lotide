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


