const takeUntil = (array, callback) => {
  let result = [];

  for (const x of array) {
    if (!callback(x)) {
      result.push(x);
    } else {
      return result;
    }
  }
};

module.exports = takeUntil;