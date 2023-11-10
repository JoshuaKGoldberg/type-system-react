# Foundations > 6. Generic Types

Sometimes you may want to reuse most of a type, swapping out specific pieces of it.
This is the concept of a "generic" type.
Generic types can receive a type parameter -similar to how functions receive runtime parameters- and returns back a type using that parameter.

This `index.ts` file's `WithPower` type takes in a `Value` type parameter.
The resultant object type it creates is `{ power: Value }`.
If `Value` is `PowerLevel | -1`, then the resultant type is `{ power: PowerLeveL | -1 }`.
