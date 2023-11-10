# Foundations > 7. Conditional Generic Types

Types can include conditional logic!
Doing so is called a "conditional type", and is most often used in conjunction with generic types.

Conditional types look like ternary statements.
Their condition is an `extends` check asking if one type is a subset of another.
Their result is the type to use if the conditional check is true, then the type to use otherwise.

The `WithPower<Value>` type in the `index.ts` file checks whether `Value extends PowerLevel`.
If it does then the resultant type is `{ happy: Value }`.
Otherwise the resultant type is `{ sad: Value }`.

In first usage, `WithPower<PowerLevel>`, `PowerLevel` does extend `PowerLevel` (it's the same type) so the result is `{ happy: PowerLevel }`.

In the second usage, `WithPower<number>`, `number` does not extend `PowerLevel`, so the result is `{ sad: number }`.

In the third usage, `WithPower<boolean>`, `boolean` does not extend `PowerLevel`...
