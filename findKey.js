const findKey = (o, cb) => {
  for (const x in o) {
    if (cb(o[x])) {
      return x;
    }
  }

  return undefined;
};

module.exports = findKey;