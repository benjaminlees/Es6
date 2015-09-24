# Classes

Classes are a code template or blue print for building an object and they are generally associated with the OO model.

Douglas Crockford as

The Idea of classes in Es6 is to mimic the syntax which is typically seen in object oriented languages such as java. So to better explain es6 classes we must start with a typical java class and then progress through JavaScript pototypal inheritance to es6 classes.

In languages such as c# and java a class constructor is used to create objects.

```
public class Point {
    public int x = 0;
    public int y = 0;

    public Point(int a, int b) {
        x = a;
        y = b;
    }
}
```

Here is a class called point with two variables which are both ints and a method which takes two parameters and assigns the variables x and y to the parameters values.

```
Point originOne = new Point(23, 94);
```

Above is an example of a variable being declared and a new object being instantiated using the Point class the new operator returns a reference to the new object and it is assigned to the variable originOne.

In JavaScript we try an mimic this by taking advantage of its prototypal nature.

```
let Point = {
    x: 0,
    y: 0,
    point (a, b) {
        this.x = a;
        this.y = b;
    }
}
```
Above an object has been created and the variable obj has been declared and assigned the reference to this object.

Now if we wanted to create a new object which has all the properties of obj we can declare a new variable and assign the value of the variable obj to the new variables prototype.

For this we use the Object.create method in JavaScript which basically does the following.

```
Object.create = (obj) => {

    let func = () => {};  

    func.prototype = obj;
    let newObj = new func();

    return newObj;

}

```
We can use the Object.create method to create a new object which references another object in its prototype property.

```
let newPoint = Object.create(point);
newPoint.point(1,2);
console.log(newPoint.x) // 1;
console.log(Point.x)    // 0;
```
Now the main idea of the new class feature in JavaScript is to take prototypal inheritance and add syntactical sugar to make the creation of classes and the instantiation of objects using classes more Object Oriented in style.

```
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
```
The example above represents an es6 class the 'x = 0' means that if no argument is provided for x set x to 0 and is an es6 feature in itself.

Below is an example of this class being instantiated.

```
let point = new Point(1, 2);
console.log(point.y) // 2
```
