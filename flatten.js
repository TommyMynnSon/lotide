const flatten = (anArray) => {
  let flattenedArray = [];

  for (let i = 0; i < anArray.length; i++) {
    if (Array.isArray(anArray[i])) {
      for (let element of anArray[i]) {
        flattenedArray.push(element);
      }
    } else {
      flattenedArray.push(anArray[i]);
    }
  }

  return flattenedArray;
};

module.exports = flatten;