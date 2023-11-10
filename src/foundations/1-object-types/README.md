# Foundations > 1. Object Types

Object types can be used in TypeScript type annotations too.
They stipulate that values must have some list of properties.

The `descriptor` variable in this `index.ts` must be given objects with a `power` property of type `number`.
`{ power: 9001 }` is ok, but `{ power: "over 9000" }` is not.

Additionally, trying to give it an object that's missing a `name` property or has an additional property (`name`) is not allowed.
