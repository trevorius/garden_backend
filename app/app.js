// test function to be exported
function test() {
  test = process.env.TEST_VAR;
  // log type of test
  // console.log(typeof test);
  return test;
}

// export the test function
module.exports = test;