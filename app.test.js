require('dotenv').config()

// import test function from app file to a constant
const test = require('./app');
// first test
describe('test', () => {
  it('should return a string', () => {
    // assert that the test function returns a string
    expect(typeof test()).toBe("string")
  });
});
// second test
describe('test', () => {
  it("should return value from .env file ", () => {
    // assert that the test function returns the value from .env file
    expect(test()).toBe(process.env.TEST_VAR)
  });
});