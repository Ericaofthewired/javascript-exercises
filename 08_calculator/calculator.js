const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  return array.length 
    ? array.reduce((total, num) => total * num)
    : 0;
};

const power = function(num1, num2) {
  let powered = num1;
	for (let i = 1; i < num2; i++) powered = powered * num1;
  return powered;
};

const factorial = function() {
	
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
