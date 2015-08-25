# [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings)

Template strings do not introduce new functionality but instead provide a much more readable and succint way of creating strings that contain variables. They allow you to enclose an expression inside a pair of curly brackets, inside a string, and this expression is evaluated and combined with the rest of the string literal.

The whole string must be surrounded by backticks, ` `this is a string` `, and these are also valid to use as quote marks to create normal strings. Any expression to be included in the string must be surround by curly brackets and prefixed with a dollar symbol, `${myVar} `.

```
let dinner = "pizza";

const hungryFor = (food) => `I like ${food} for dinner `;

hungryFor(dinner);
> "I like pizza for dinner";
```

es5 equivalent

```
var dinner = "pizza"

function hungryFor(food) {
  return "I like " + food + " for dinner";
}

hungryFor(dinner);
> "I like pizza for dinner";
```

With more complex operations and string concatenation template strings become increasingly useful.

They also respect line-breaks, so if you want a multi-line string you no longer have to include line-break characters. However, indentation/white-space is also retained so take care when using multiline templates. The following template string outputs correctly indented html.

```
var html = `<div>
  <div>
    <p>Template magic</p>
  </div>
</div>`
```
which may be more clearly written as
```
var html =
`<div>
  <div>
    <p>Template magic</p>
  </div>
</div>`
```

## Warning
Never let a user construct template strings, as they have access to variables and functions and can therefore introduce malicious scripts into an application.
