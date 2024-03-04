const express = require('express');
const app = express();
const port = 7865;

app.listen(port, () => {
 console.log(`API available on localhost port ${port}`);
});

// Existing root endpoint
app.get('/', (req, res) => {
 res.send('Welcome to the payment system');
});

// New endpoint with validation and response
app.get('/cart/:id', (req, res) => {
 const { id } = req.params;

 // Validate that id is a number
 if (!Number.isInteger(parseInt(id))) {
   return res.status(400).send('Invalid cart ID: must be a number');
 }

 // Assuming you have a mechanism to fetch payment methods for a cart
 const paymentMethods = getPaymentMethodsForCart(id); // Replace with your actual implementation

 res.json({
   message: `Payment methods for cart ${id}`,
   paymentMethods,
 });
});

// Replace with your logic to fetch payment methods
function getPaymentMethodsForCart(id) {
 // Implement your logic to retrieve payment methods based on cart ID
 return ['Credit Card', 'PayPal', 'Cash on Delivery']; // Example data
}

module.exports = app;

