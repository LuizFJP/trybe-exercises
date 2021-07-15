const math = require('./fixation-exercise-01');
jest.mock("./fixation-exercise-01");

describe('To do the math operations', () => {
  it('The sub operation must return 8', async () => {
    math.subtrair.mockReturnValue(8); //we mocked the function and we defined a false value to test.

    math.subtrair(9, 1); //call function
    expect(math.subtrair).toHaveBeenCalled(); //check if the function is called in some moment
    expect(math.subtrair(9, 1)).toBe(8); 
  })
})