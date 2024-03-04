function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    // Return a rejected promise in case of failure (not required for this exercise)
    return Promise.reject(new Error('API request failed'));
  }
}

module.exports = getPaymentTokenFromAPI;
