# Foundations > 3. Literal Types

So far, we've seen "primitive" types (`number`, `string`, ...) and object types (`{ ... }`).
But TypeScript allows describing values as specific literal values of primitives too.

The `power` property in this `index.ts` is a union type containing the primitive `string` and the literal `-1`.
In other words, `descriptor.power` is allowed to be any `string`, but if it's a number, it's only allowed to be the number `9001`.
