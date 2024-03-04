const request = require('request');
const { expect } = require('chai');

describe('Index Page', (/* ... existing tests for Index Page */) => {});

describe('Cart Page', () => {
 it('should return the correct payment methods when id is a number', (done) => {
   request.get('http://localhost:7865/cart/123', (error, response, body) => {
     expect(error).to.be.null;
     expect(response.statusCode).to.equal(200);
     expect(body).to.be.json;
     expect(body).to.have.property('message').that.equals('Payment methods for cart 123');
     expect(body).to.have.property('paymentMethods');
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

});

