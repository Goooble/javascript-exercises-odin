const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, value) => {
    return total + value;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, value) => {
    return total * value;
  }, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(value) {
  if(value === 0) return 1;
  let factorial = 1;
	for(let i = 1; i<= value; i++){
    factorial *= i;
  }
  return factorial;
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
