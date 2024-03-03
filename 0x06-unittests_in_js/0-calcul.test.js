/* Function to test the function CalculateNumber  */
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 8 when inputs are 5 and 2.8', () => {
    assert.strictEqual(calculateNumber(5, 2.8), 8);
  });

  it('should return -10 when inputs are -4.6 and -5', () => {
    assert.strictEqual(calculateNumber(-4.6, -5), -10);
  });
  it('should return 2 when inputs are 0.7 and 0.6', () => {
    assert.strictEqual(calculateNumber(0.7, 0.6), 2);
  });
  it('should return NaN when passed an actual character', () => {
   assert.strictEqual(calculateNumber('a', '3.9'), NaN)
  });
  it('should return -4 when inputs are -3 and -2.8', () => {
    assert.strictEqual(calculateNumber(-3, -2.8), -6);
  });

});
