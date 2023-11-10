# Foundations > 0. Types

TypeScript is a _superset_ of JavaScript.
That means its syntax contains all the same JavaScript syntax you know and love _plus_ some added syntax.

The added syntax is generally used to either:

- Explain what types exist in your code
- Indicate what types different values should align to

For example, the `index.ts` file's `powerLevel` variable is being declared with a type annotation to be type "number".
Later code that assigns it a value of type number (`9001`) is considered fine by TypeScript's type checker.
But assigning it a string (`"over 9000"`) causes a type error.
