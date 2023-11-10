# Foundations > 8. Constrained Type Parameters

...but in the last step, we probably wouldn't want people to provide `boolean` as a type for `WithPower`.
We'd want a way to restrict type parameters to only be within a specific type.
TypeScript allows "constrained" type parameters by placing the `extends` keyword after the parameter's name, followed by the type you want to constrain to.

In this `index.ts`, `WithPower<Value extends PowerLevel | -1>` indicates that any type given as an argument for `Value` must be a subset of `PowerLevel | -1`.
`PowerLevel` is allowed but `boolean` isn't.
