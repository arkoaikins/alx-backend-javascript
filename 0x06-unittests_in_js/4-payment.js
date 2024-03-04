const Utils = require('./utils')
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const costTotal = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${costTotal}`);
}

module.exports = sendPaymentRequestToApi;
