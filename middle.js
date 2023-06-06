const middle = function(array) {
  let output = [];
  
  if (array.length == 1 || array.length == 2) {
    return output;
  }

  if (array.length % 2 === 0) {
    let middle = array.length / 2;
    output.push(array[middle - 1]);
    output.push(array[middle]);
    return output;
  } 

  let middle = Math.floor(array.length / 2);
  output.push(array[middle]);
  return output;

}

module.exports = middle;


