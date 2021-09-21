const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  const firstNames = [
    'Karl',
    'Salima',
    'Agouhanna',
    'Fang',
    'Kavith',
    'Jason',
    'Salima',
    'Fang',
    'Joe'
  ];

  it('should return true', () => {
    const expected = {
      Jason: 1,
      Fang: 2,
    };

    assert.deepEqual(countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false }), expected);
  });

  it('should return undefined', () => {
    let result = countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false });

    assert.isUndefined(result['Karima']);
  });
});