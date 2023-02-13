# SOLID design principles 🚀

These are the first 5 object-oriented principles outlined by Robert C Martin. Coding by these principles will ensure maintinability as software grows into a large codebase.

SOLID is an acronym for

-   Single responsibility
-   Open / Closed
-   Liskov substitution
-   Interface segregation
-   Dependency inversion

## Single responsibility

**Each class should have only one reason to change**
Pretty simple, right? For a quick example, suppose we have a class that compiles a report from some data, and can also print that report. If either of these things were required to change, then we'd have to edit the class. The problem is that including both in one class increases the chances that the two functionalities will be coupled.

## Open / Closed

**Classes should be \***open**_ for extension, but _**Closed**\* for modification.**
_In other words, you should not need to rewrite an exiskting class for implementing new features_
For example, let's say we have

    interface Shape {
    }

    class Circle implements Shape {
        int radius;
    }

    class Square implementes Shape {
        int length;
    }

And we want to calculate the total area of some shapes.
