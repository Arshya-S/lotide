const letterPositions = function(sentence) {
  const results = {};
  let newSentence = sentence.toLowerCase();

  for (let i in newSentence) {
    if (newSentence[i] !== ' ') {
      if (results[newSentence[i]]){
        results[newSentence[i]].push(Number(i));
      } else {
        results[newSentence[i]] = [];
        results[newSentence[i]].push(Number(i));
      }
    }
  }
  return results;
};

module.exports = letterPositions;
