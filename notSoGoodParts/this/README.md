# Should We Use This ?

Although `this` is not a new feature of es6 Douglas Crockford discussed the negatives of using `this` in [The Better Parts](https://www.youtube.com/watch?v=PSGEjv3Tqo0).

Douglas explains that in 2007 a bunch of JavaScript enthusiasts went about trying to make JavaScript more secure so that third party code could run without interfering with the JavaScript applications. Douglas realized that the main issue which prevented the improved security of JavaScript was the use of `this`.

'If this is used in a method this gets down to the object of interest but if you take that method and call it as a function this gets down to the global object which destroys all security' *Douglas Crockford*.

```
var obj = {
    say: function () {
       console.log( this.window);
    },
    window: 1
};
obj.say();

var sayAgain = obj.say;
sayAgain();
```

If the rather crude example above were to be written into a console it would first log 1 and then log the global window object.

To get around this security floor Douglas recommends that one should not use this at all.

For a more detailed explanation see [Don’t use this in JavaScript](https://luizfar.wordpress.com/2012/04/28/dont-use-this-in-javascript/).
