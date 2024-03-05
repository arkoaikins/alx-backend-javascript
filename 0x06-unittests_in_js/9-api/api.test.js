const request = require('request');
const { expect } = require('chai');

describe('Cart Page', () => {
  it('should return the correct payment methods when id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(error).to.be.null;
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return a 404 status code when id is not a number', (done) => {
    request.get('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(error).to.be.null;
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should handle invalid cart IDs gracefully', (done) => {
    request.get('http://localhost:7865/cart/-1', (error, response, body) => {
      expect(error).to.be.null;
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return the correct status code for the root URL', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(error).to.be.null;
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('should return the correct message for the root URL', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(error).to.be.null;
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
