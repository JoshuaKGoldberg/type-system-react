# Fun > 2. Keyof Types

The type system includes a new `keyof` operator.
Placing `keyof` before the name of a type gives back all the keys of that type.

You can use `keyof` in conjunction with an `extends` constraint to allow dynamic lookups of types.
In this `index.d.ts` file, `Render` is a generic type that constrains its type parameter `Tag` to `Component` (the keys of `ComponentRegistry`).
That allows TypeScript to know that `Render<"Emoji">` is equivalent to `ComponentRegistry["Emoji"]`, or `"✨"`.
