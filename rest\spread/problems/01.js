// Write a function that takes a list of numbers, and returns true if the first number is divisible by all of the others.
// The function may be called with any number of parameters


const isDivisible = (a, ...args) => args.every(el => a % el === 0);

console.log(isDivisible(10, 2, 5));

console.log(isDivisible(10, 5, 3));

console.log(isDivisible(150, 15, 10, 5, 3, 1, 6, 75, 50, 150, 30, 25, 2));
