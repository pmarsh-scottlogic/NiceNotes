# Liskov Substitution

Suppose you have a program that uses a class `P`. Now, say you create a new class `C` which is a child of (extemds) `P`. You should be able to replace `P` with `C` without changing the program's behaviour.

An example that violates Liskov Substitution could be this

    class Bird{
        peck() {...}
        fly() {...}
    }

    class Ostrich extends Bird{
        ...
    }

Because an Ostrich cannot fly. So if we swapped out all the `Bird`s in a program for `Ostrich`es then we'd have problems every time we ask the ostrich to fly. In this case, it would be semantic problems, because the program may well still run, but there would very likely be weird side effects.