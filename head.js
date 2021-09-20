const head = (anArray) => {
  if (anArray.length === 0) {
    return undefined;
  } else {
    return anArray[0];
  }
};

module.exports = head;