# Destructuring

In [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) destructureing is described as follows:

*The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals.*

MDN explains destructuring in a whole load of detail with very good examples so I would encourage you to read through what they [wrote](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). However here is a brief overview of the type of things that one can do using the destructuring assignment syntax.

One particularly handy and simple implementation of the destructuring assignment is multiple return values from a function.

```
let f = () => {
  return [1,2];
}

let [a.b] = f();
// variable a now equals 1 and variable equals 2
```

With objects the destructuring assignment matches object properties instead of array indices this allows for some cool ways of structuring arguments for functions which are designed to take an object with a known structure.

```
let david = ({name:'david', details: {height: '5ft', hair:brown}}) => {
  console.log(details.height);
}
david({height: '6ft', hair:black});
// this would print '6ft' in the console
```
