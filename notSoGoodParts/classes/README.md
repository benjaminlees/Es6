# Classes

Classes are a code template or blue print for building an object and they are generally associated with the OO model.

In JavaScript we can use its prototypal nature to mimic the OO object instantiation using classes.

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
