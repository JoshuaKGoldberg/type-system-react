# Foundations > 2. Union Types

Sometimes, some values can be either of several types.
TypeScript calls these "union" types.

The `power` property in this `index.ts` is described as either a `string` or a `number`.
Providing a value of type `9001` (`number`) or `"over 9000"` (`string`) is allowed, but `true` (`boolean`) is not.
