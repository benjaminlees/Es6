# [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

Arrows `=>` are a short hand way of writing a function. However there are a few differences between the two.

Firstly arrow functions are always anonymous so to create a function using an arrow we must assign it to a variable:

```
let add1 = (number) => {
    number = number + 1;
}
```

The arrow allows for single line code which can improve readablility as well as reducing the amount of code that you need to write. Two other features help make the code even more concise:
	* With one argument you can remove the parenthesis around the argument.
	* If your function body fits on one line, the `return` keyword can be omitted.

```
var arrayAdd = number.map((number, i) => number + i);
var arrayIncrement = number.map(number => number + 1);
```

Here we can see both of these features being used to make short inline functions for `map`s.

Arrows also share the same [lexical  ](http://whatis.techtarget.com/definition/lexical-scoping-static-scoping) ```this``` as their surrounding code which means that inherit the scope. However according to Douglas Crockford we shouldn't even be using `this`.
