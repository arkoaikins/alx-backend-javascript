const request = require('request');
const { expect } = require('chai');

describe('Index Page', () => {
  it('should return the correct status code', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(error).to.be.null;
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct welcome message', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(error).to.be.null;
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should handle invalid routes', (done) => {
    request.get('http://localhost:7865/invalid-route', (error, response, body) => {
      expect(error).to.be.null;
      expect(response.statusCode).to.be.at.least(400);
      done();
    });
  });

  it('should handle unexpected errors gracefully', (done) => {
    request.get('http://non-existent-url.com', (error, response, body) => {
      expect(error).to.not.be.null;
      done();
    });
  });
});

describe('Cart Page', () => {
  it('should return the correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(error).to.be.null;
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct status code when :id is NOT a number (=> 404)', (done) => {
    request.get('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(error).to.be.null;
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return the payment methods for a valid cart ID', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(error).to.be.null;
      const jsonResponse = JSON.parse(body);
      expect(jsonResponse.paymentMethods).to.deep.equal(['method1', 'method2']);
      done();
    });
  });

  it('should return an empty array for an invalid cart ID', (done) => {
    request.get('http://localhost:
