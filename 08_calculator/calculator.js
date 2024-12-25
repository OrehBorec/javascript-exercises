const { count, log } = require("console");
const { fstat } = require("fs");

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};
const sum = function (array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

const multiply = function (array) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (f) {
  let result = 1;
  for (let i = 1; i <= f; i++) {
    result *= i;
  }
  return result;
};


// честно говоря, я уже устал
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
