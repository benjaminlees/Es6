# the [rest operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters)

The rest operator is a syntax addition that can prefix a named function parameter to store all following parameters in an array. It provides a simpler way of accessing the parameters that a function is called with, instead of using the `arguments ` object. Also referred to as *ellipses*. The rest operator must come before the final argument of a function.

```
let doubler = (...args) => args.map(el => el * 2);
```

If you wanted to write the equivalent in es5 it would be:

```
function doubler() {
  var args = Array.prototype.slice.call(arguments);
  return args.map(function(el) {
    return el * 2;
  });
}
```

Rest parameters differ from the `arguments ` object in that they are stored in a real array, so methods such as `map ` and `reduce ` work, whereas the `arguments ` object is an array-like object that you must convert into an array before operating on. Also, the `arguments ` object contains every parameter passed in, while rest parameters are only those parameters following the rest operator.

```
let logger = (a, b, ...z) => console.log(z);

logger(1, 2, 3, 4, 5, 6, 7);
> [3,4,5,6,7]
```

In the previous example, the parameter z contains every parameter passed after the first two, in an array.


# the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

The spread operator uses exactly the same notation as the rest operator but is used when an expression is to be expanded where multiple function arguments or array elements are expected.

The spread operator can be used to represent a varying number of values in an array literal. This makes it easy to concatenate arrays.

```
let middleArray = [3, 4, 5];
let outerArray = [1, 2, ...middleArray, 6, 7];
```

It can also be used in destructuring to store an iterable object with a varying number of values.

```
let [a, b, ...iterableObj] = [1, 2, 3, 4, 5];
console.log(iterableObj);
> [3, 4, 5];
```

Using the spread operator means you can turn any iterable object into an array.

```
let map = new Map([ [1, "one"], [2, "two"], [3, "three"] ]);
let arr = [...map];
```

Spread can be used anywhere in an array literal or a function call, and multiple times, in contrast to the rest operator, which has to prefix the final named parameter of a function.


For more detailed information and examples see the chapters in [exploringjs](http://exploringjs.com/es6/ch_parameter-handling.html#sec_spread-operator) by Dr Axel Rauschmayer on [rest parameters](http://exploringjs.com/es6/ch_parameter-handling.html#sec_rest-parameters) and the [spread operator](http://exploringjs.com/es6/ch_parameter-handling.html#sec_spread-operator)
