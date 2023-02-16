function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n < 1) {
    throw new TypeError("Invalid number less than 1");
  }

  if (n > 1000000) {
    throw new TypeError("Invalid number greater than 1000000");
  }

  return 1/n;

};

module.exports = {
  returnsThree,
  reciprocal
};
