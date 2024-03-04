const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message for payment with totalAmount of 100 and totalShipping of 20', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
    sinon.assert.calledOnce(consoleLogSpy);
  });

  it('should log the correct message for payment with totalAmount of 10 and totalShipping of 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');
    sinon.assert.calledOnce(consoleLogSpy);
  });
});
