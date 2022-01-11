const { expect } = require('chai');

describe('Check if a number it\'s positive, negative or neutral', () => {
  const checkNumber = require('./exercise01');
  it('1. Check if a number it\'s positive', () => {
    const isPositive = checkNumber(5);
    expect(isPositive).to.be.equals('positivo');
  })
  it('2. Check if a number it\'s negative', () => {
    const isNegative = checkNumber(-1);
    expect(isNegative).to.be.equals('negativo');
  })
  it('3. Check if a number it\'s neutral', () => {
    const isNeutral = checkNumber(0);
    expect(isNeutral).to.be.equals('neutro');
  })
});
  
