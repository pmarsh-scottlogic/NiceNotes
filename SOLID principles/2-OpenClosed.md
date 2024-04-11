# Open / Closed

Classes should be **open** for extension, but **Closed** for modification.

_In other words, you should not need to rewrite an existing class for implementing new features._

## Example

    interface Shape {
    }

    class Circle implements Shape {
        int radius;
    }

    class Square implementes Shape {
        int length;
    }

And we want to calculate the total area of some shapes.

    class AreaCalculator {
        calculateArea(shapes: Shape[]) {
            let total = 0;
            for(shape in shapes) {
                if(shape is Circle) total += PI * shape.radius * shape.radius;
                else if (shape is Square) total += shape.length * shape.length;
            }
            return total;
        }
    }

This `AreaCalculator` class violates the open/closed principle. Why? Because if we want to extend the behaviour to, say, support rectangles then we would have to modify the class. It is not **closed for modification**.

## Solution

To make our code conform to the open/closed principle, let's move the logic for calculating a shape's area to the shape interface.

    interface Shape {
        calculateArea: () => float
    }

    class Circle implements Shape {
        int radius;
        calculateArea = () => return PI * this.radius * this.radius;
    }

    class Square implementes Shape {
        int length;
        calculateArea = () => this.length * this.length;
    }

Now `AreaCalculator` may work for any shape at all. We extend our functionality to new shapes by intruducing new classes that implement the `Shape` interface. AreaCalculator remains **closed for modification**:

    class AreaCalculator {
        calculateArea(shapes: Shape[]) {
            let total = 0;
            for(shape in shapes) {
                total += shape.calculateArea();
            }
            return total;
        }
    }