# Foundations > 4. Template Literal Types

TypeScript also allows describing patterns of string literals that look like template literal strings.
These "template literal" types are a halfway point between string literals and primitives.

This `index.ts` indicates that `descriptor.power` is allowed to be any string that starts with `"over "` and then has a `number`.
`"over 9000"` is allowed, but `"over 9k"` is not (it doesn't match the `number` portion) and `"under 9000"` isn't either (it doesn't match the `"over "` portion).
