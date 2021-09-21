const copyArray = (anArray) => {
  let copy = [];

  for (let item of anArray) {
    copy.push(item);
  }

  return copy;
};

const without = (source, itemsToRemove) => {
  let wantedItems = copyArray(source);

  for (let w = 0; w < wantedItems.length; w++) {
    for (let r = 0; r < itemsToRemove.length; r++) {
      if (wantedItems[w] === itemsToRemove[r]) {
        wantedItems.splice(w, 1);
      }
    }
  }

  return wantedItems;
};

module.exports = without;