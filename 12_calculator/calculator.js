const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(nums) {
  let prod = 1;
  for (let num of nums) {
    prod *= num;
  }
  return prod;
};

const power = function(base,exp) {
	let pow = 1;
  for (let i = 1; i <= exp; i++) {
    pow *= base;
  }
  return pow;
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1); 
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
