# Fun > 3. Inferred Types

TypeScript allows pulling out portions of a type within a conditional type check.
You can use that to pull out properties from the provided type argument if they satisfy some condition.

In this `index.d.ts`, `Render` takes in a type parameter named `Raw`.
If a provided `Raw` includes a `text` property whose type extends `Component`, then that type is named `Tag` and `Render`'s result is `ComponentRegistry[Tag]`.
