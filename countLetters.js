const countLetters = (sentence) => {
  let count = {};

  for (const letter of sentence) {
    if (count[letter]) {
      count[letter]++;
    } else {
      if (letter !== ' ') {
        count[letter] = 1;
      }
    }
  }

  return count;
};

module.exports = countLetters;