# Fun > 6. Recursive Inferred Template Literal Types

In the last example, `Render` could find a `Tag` from within an input string and return the rendered tag between `Before` and `After` strings.
But what if `After` includes more tags to render?
This `index.d.ts` file's `Render<"Hello, world! <Emoji /><Emoji /><Emoji />">` needs a way to render any number of tags.

In the output string from `Render`, we can replace `${After}` with `${Render<After>}` to have the type recursively descend into `After`.
