// Template strings can include any javascript expression inbetween the curly brackets
// including function calls

const answer = (param) => `${param}2`;

console.log(`The meaning of life is ${ answer(4) } `); // curly brackets expanded to make it clearer

> The meaning of life is 42
