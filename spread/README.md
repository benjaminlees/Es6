# the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

The spread operator is a new parameter that can be passed to functions to indicate there will be a varying number of arguments. It provides a simpler way of accessing the parameters that a function is called with, instead of using the `arguments ` object. Also referred to as the *rest operator* or *ellipses*.

```
function myFunc(...args) {
  console.log(args);
}
```

If you wanted to write the equivalent in es5 it would be:

```
function myFunc() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
}
```

The spread operator differs from the `arguments ` object in that is a real array, so methods such as `map ` and `reduce ` work, whereas the `arguments ` object is an array-like object that you must convert into an array before operating on. Also, the `arguments ` object contains every parameter passed in, while the spread operator creates an array of parameters from the parameters following it.

```
function myFunc(a, b, ...z) {
  console.log(z)
}

myFunc(1, 2, 3, 4, 5, 6, 7);
> [3,4,5,6,7]
```

In the previous example, the parameter z contains every parameter passed after the first two, in an array.


For more detailed information and examples see the chapter in [exploringjs](http://exploringjs.com/es6/ch_parameter-handling.html#sec_spread-operator) by Dr Axel Rauschmayer
