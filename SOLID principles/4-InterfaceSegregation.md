# Interface Segregation

Clients should not be exposed to methods that they do not need.

Make interfaces small. 

## Example of a violation

    interface Vehicle {
        start
        stop
        takeOff
        land
    }

    class Plane implements Vehicle {
        // all good
    }

    class Car implements Vehicle {
        // takeOff and land are irrelevant, yet they must be implemented.
    }

## Fix

    interface Vehicle {
        start
        stop
    }

    interface Flyer {
        takeOff
        land
    }

    class Plane implements Vehicle and Flyer {
        // has all the methods it needs and no more
    }

    class Car implements Vehicle {
        // has all the methods it needs and no more
    }