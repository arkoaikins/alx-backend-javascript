const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should add two numbers', function () {
    assert.strictEqual(calculateNumber('SUM', 5, 3), 8);
  });

  it('should subtract two numbers', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 4, 1), 3);
  });

  it('should divide two numbers', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 40, 5), 8);
  });
  it('should return Error when dividing by zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -2, 0), 'Error');
  });

  it('should return Error when dividing by zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 6, 0), 'Error');
  });
  it('should subtract two numbers', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -8, -1), -7);
  });
});

