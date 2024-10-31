const add = function(...nums) {
	return nums.reduce((a, b) => a + b)
};

const subtract = function(...nums) {
	return nums.reduce((a, b) => a - b)
};

const sum = function(arr) { //an array of integers
  return arr.reduce((a, b) => (a + b), 0)
};

const multiply = function(arr) { //an array of integers
  return arr.reduce((a, b) => (a*b), 1)
};

const power = function(...nums) {
	return nums.reduce((a, b) => Math.pow(a, b))
};

const factorial = function(num) {
	let { factorial } = require('mathjs') // from npm mathjs library installation
  return factorial(num)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
