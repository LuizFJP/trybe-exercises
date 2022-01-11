const uppercase = require('./exercise01');

describe ('The function must return a String in capital', () => {
  it('The function is going to receive "bananas" and to return "BANANAS"', (done) => {
    const fruit = 'bananas';
    uppercase(fruit, (result) => {
      expect(result).toBe('BANANAS');
      done();
    })
  })
})
