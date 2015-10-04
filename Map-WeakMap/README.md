#  Map and WeakMap

Map and WeakMap are new data structures that have been introduced in es6. To properly explain Maps and WeakMaps it is perhaps easier to start with the main data structure in JavaScript which is the Object.

##  Objects

In JavaScript when a variable is declared and then assigned a value, it is actually assigned a reference to where the value exists in memory. If a variable is assigned a new value its reference now points to where this new value exists in memory. If a value has no references that point to it the garbage collector removes it from memory. 

But what happens when a new variable is declared and assigned to another variable?

```
let a = 1;
let b = a;
let c = 1;
a = 2;
console.log(a); // 2
console.log(b); // 1
```

In the example above a is being assigned a reference which points to where the value 1 exists in memory and then b is being assigned a new reference which also points to the same place in memory. But when a is assigned a new reference which now points to where the value 2 exists b's reference still points to where value 1 exists.

It is perhaps important to stress that a reference is to a place in memory not a particular value. in the example above b references a place in memory which happens to contain the value 1. C however references a different place in memory that also contains the value 1.

The properties of an object are themselves references to a particular place in memory. When a is declared and assigned a reference to a object `a = { b: 1 }` a now is assigned a reference which points to the object `{ b: 1 }` but the property b is itself assigned a reference to where the value 1 exists in memory.

Therefore:

```
let a = { b: 1 };
let c = a;
a.b = 2;
a = { b: 4 };

console.log(a); // { b: 4 }
console.log(c); // { b: 2 }
```

## Map

The map object is a simple key value map. For map objects any value can be used as a key value [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map). Map objects have several methods the most important being get() and set().

set() is used to set a key and value whilst get() is used to retrieve a value using a key. Below is an example of using Map.

```
let map = new Map();
let a = { d: 3 };
map.set(1, 2);
map.set(a, 5);

console.log(map.get(1)); // 2
console.log(map.get(a)); // 5
```
When using map as shown in the above example if the variable a which is assigned the reference to the object `{ d: 3}` is set as a property of the map object the key is a reference to the object `{ d: 3}` so if the variable a was to be removed the key `{ d: 3 }` would still exist in memory as the map object holds a reference to it and therefore the garbage collector will not remove it. This can lead to memory leaks in certain circumstances.

## WeakMap 

For the WeakMap object keys must themselves be objects. The key in a WeakMap is held weakly. This means that if a WeekMap key is assigned a reference to a specific point in memory which contains an object and if their is no other variable that is assigned a reference which points to that object it will still be collected by the garbage collector.

```
let wm = new WeakMap();
let c = { c: '50' };
wm.set(c, 30);

console.log(wm.get(c)); // 30

c = {c: '20'};

console.log(wm.get(c)); //
```

In the example above c is assigned the reference to the object { c: '50' } so when c is set as a key in the WeakMap wm that key is assigned a new reference to the object { c: '50' }. However as that reference is weak when c is assigned a new reference the object { c: '50' } is collected by the garbage collector and therefore when calling wm.get(c) nothing is returned.


