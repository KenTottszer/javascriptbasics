const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(array) {
  let sum = 0;
  for (let i in array) {
      sum = sum + array[i];
    }
    return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let i in array) {
      product = product * array[i];
    }
    return product;
};

const power = function(a, b) {
   let powers = 1;
  for(let i = 0; i < b; i++){
      powers = powers * a;
    }
    return powers;
	
};

const factorial = function(a) {
    let fact = a;
    let range = a-1;
    if(a == 0){
      return 1;
    }
    else{
      while(range>0){
        a--;
        fact *= a;
        range--;
      }
      return fact;
    }
};


factorial([2, 4, 6, 8, 10, 12, 14]);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
