# Single responsibility

**Each class should have only one reason to change**
Pretty simple, right? For a quick example, suppose we have a class that compiles a report from some data, and can also print that report. If either of these things were required to change, then we'd have to edit the class. The problem is that including both in one class increases the chances that the two functionalities will be coupled.
