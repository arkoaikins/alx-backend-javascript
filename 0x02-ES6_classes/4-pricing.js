/* eslint-disable no-underscore-dangle */
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  getAmount() {
    return this._amount;
  }

  setAmount(value) {
    this._amount = value;
  }

  getCurrency() {
    return this._currency;
  }

  setCurrency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
