# Proper Tail Calls

For those who have been proponents of functional JavaScript the arrival of 'proper tail calls' is the most exciting feature of Es6.

Tail call optimisation (TCO) is a way to make recursively-defined functions more space efficient; that is functions that call themselves multiple times with different arguments are less likely to use up all your memory.

Let's look at a function defined with loops and a function defined recursively and see the difference in memory usage.

```js
function loopyFactorial (n) {
  var result = 1;
  for (var i = 1; i <= n; i++){
    result *= i;
  }
  return result;
}

function recursiveFactorial (n) {
  if (n < 2) { return 1; }
  else { return n * recursiveFactorial(n-1); }
}
```

Let's see what happens in each case when I call the function on 3. In the case of `loopyFactorial`, 
  1. I start off by setting `result` and `i` to one.
  2. Then, I check if `i` is less than or equal to 3.
  3. It is, so I multiply 3 by 1 and add 1 to `i`.
  4. I go through steps 2 and 3 again 2 more times. After that, 2 `i` is greater than 3, so I return the value of result.

At every point, all I have to remember are the values of `i` and `result`. Now let's look at `recursiveFactorial`. 
  1. I check whether 3 is less than 2.
  2. It isn't, so I return 3 multiplied by `recursiveFactorial(2)`. Before I can do that, I have to work out what `recursiveFactorial(2) *is*.
    1. I check whether 2 is less than 2.
    2. It isn't, so I return 2 multiplied by `recursiveFactorial(1)`. Before I can do that, I have to work out what `recursiveFactorial(1) *is*.
      1. I check whether 1 is less than 2.
      2. It is! I return 1.
    3. I return 2 * 1 = 2
  3. I return 3 * 2 = 6

The problem with the recursive function is the bulging out of the lists within lists -- I am having to remember where to go back to after I finish each stage! Recursively-defined functions don't have to bulge this way.

```js
  function slimRecursor (n, m) {
    if (n < 2) { return m; }
    else { return slimRecursor (n - 1, m * n); }
  }

  function slimRecursiveFactorial (n) {
    return slimRecursor (n, 0);
  }
```

How much memory is `slimRecursiveFactorial` going to use? A similar amount to `loopyFactorial` or a similar amount to `recursiveFactorial`? The answer depends on whether we have TCO or not! TCO lets us collapse a chain of `return`s into one `return`. That is, if a function returns another call to itself *without having to do any other computation on the result of that call*, we can only remember where we want the final computation to end up, and not all the places it needs to stop along the way. 

Es6 now has built in [TCO](http://duartes.org/gustavo/blog/post/tail-calls-optimization-es6/) (tail call optimization) which means that we can replace loops with recursive functions and write JavaScript in a more functional style.
