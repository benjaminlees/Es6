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
let david = ({name: david, details: {height: feett, hair:brown}}) => {
  console.log(feet);
}
david({height: '6ft', hair:'black'});
// this would print '6ft' in the console
```

Here is another example from MDN of providing defaults to a function (Without destructuring first):

```js
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
    var size = options.size === undefined ? 'big' : options.size;
    var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
    var radius = options.radius === undefined ? 25 : options.radius;
    console.log(size, cords, radius);
    // now finally do some chart drawing
}

drawES5Chart({
  cords: { x: 18, y: 30 },
    radius: 30
});
```

```js
function drawES6Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) 
{
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES6Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});
```
