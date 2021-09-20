const tail = (anArray) => {
  let tail = [];

  if (anArray.length === 0 || anArray.length === 1) {
    return tail;
  } else {
    for (let i = 1; i < anArray.length; i++) {
      tail.push(anArray[i]);
    }

    return tail;
  }
};

module.exports = tail;