const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get(/^\/cart\/(\d+)$/, (req, res) => {
  const id = req.params[0];
  res.status(200).send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, res) => {
  const paymentMethods = {
    credit_cards: true,
    paypal: false
  };
  res.status(200).json({ payment_methods: paymentMethods });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.status(200).send(`Welcome ${userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
