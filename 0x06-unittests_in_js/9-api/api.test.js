// ... existing Index Page tests ...

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
     expect(response.statusCode).to.equal(404); // Or a custom error code if applicable
     done();
   });
 });

 // Consider additional tests for:
 // - Response content when id is valid (payment methods data)
 // - Error handling for unexpected issues (e.g., server errors)
});

