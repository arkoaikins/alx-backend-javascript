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

