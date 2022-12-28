function sum(a, b){
  return a + b;
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string){
  return string.split('').reverse().join('');
}


const calculator = {
  add(a, b) {
	return a + b;
  },
  subtract(a, b) {
	return a - b;
  },
  multiply(a,b) {
	return a * b;
  },
  divide(a, b) {
	return a / b;
  }
};


export {sum, capitalize, reverseString, calculator}


