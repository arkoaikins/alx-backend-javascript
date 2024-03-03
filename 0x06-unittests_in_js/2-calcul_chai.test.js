const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai').expect;
const { describe, it } = require('mocha');



describe('calculateNumber', function () {
  it('should add two numbers', function () {
    expect(calculateNumber('SUM', 5, 3)).to.equal(8);
  });

  it('should subtract two numbers', function () {
    expect(calculateNumber('SUBTRACT', 4, 1)).to.equal(3);
  });

  it('should divide two numbers', function () {
    expect(calculateNumber('DIVIDE', 40, 5)).to.equal(8);
  });

  it('should return "Error" when dividing by zero', function () {
    expect(calculateNumber('DIVIDE', -2, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 6, 0)).to.equal('Error');
  });

  it('should subtract two negative numbers', function () {
    expect(calculateNumber('SUBTRACT', -8, -1)).to.equal(-7);
  });
});
