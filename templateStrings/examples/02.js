// Change the value of digit to easily alter both parts of the string
// The call to timesTables() is evaluated and concatenated with the rest of the string

function timesTables(num) {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return nums.map(el => el * num);
}

let digit = 0;

console.log(`I know my ${digit} times table: ${timesTables(digit)} `);
