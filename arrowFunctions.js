/**
 * Rewrite the following `greet` function as an arrow function
 */


const greet=(name)=>{
  return `Hello ${name}`;
}

/**
 * sum(a, b):
 * - revieces two numbers
 * - returns their sum
 * - write it as an arrow function
 */
const sum=(a, b)=> {

  return a+b;
  // Your code here
}

/**
 * square(n):
 * - receives a number n
 * - returns the square of the number
 * - write it as an arrow function
 *
 * e.g.
 * square(4) -> 16
 * sqaure(10) -> 100
 */
const square=(n)=> {
  // Your code here
  return n*n;
}

/**
 * 🌶️🌶️
 * sqaures(numbers):
 * - receives an array numbers
 * - returns an array of the squares of the numbers
 * - write it as an arrow function
 *
 * e.g.
 * squares([1, 2, 3]) -> [1, 4, 9]
 */
const squares=(numbers)=> {
  // Your code here
  return numbers.map(number => number * number);
}

module.exports = {
  greet,
  sum,
  square,
  squares,
};
