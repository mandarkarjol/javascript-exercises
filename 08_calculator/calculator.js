const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sumValue = 0;
  for (num of array){
    sumValue += num;
  };
  return sumValue
};

const multiply = function(array) {
  let multipliedValue = 1;
  for (num of array){
    multipliedValue *= num;
  }
  return multipliedValue;

};

const power = function(num1, num2) {
return num1 ** num2;
};

const factorial = function(num) {
  let fact = 1;
  if (num === 0){
    return fact;
  }
  else if (num === 1){
    return fact;
  }
  else {
    for (num ; num > 0 ; num--){
      fact *= num;
    }
    return fact;
  };
	
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
