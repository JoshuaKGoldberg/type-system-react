# Fun > 7. Multiple Recursive Inferred Template Literal Types

At this point, we've gotten rendering working for self-closing tags like `"<Emoji />"` (yay!).
But what about tags with content, like `<Heading>...</Heading>`?

Conditional types can have multiple ternary conditions.
This `index.d.ts` file adds a second `?` `:` check:

1. If `Raw` matches `Before<Tag />After` (the same check as before), then the same result for a self-closing tag is used as before:
   1. `Before`
   2. `Render<Tag>`
   3. `After`
2. If `Raw` matches `Before<Tag>string</Tag>After`, then a new result for a tag with children is used (coincidentally the same template as before):
   1. `Before`
   2. `Render<Tag>`
   3. `After`

`Render<"<Heading>Hello, world! <Emoji /></Heading>">` matches to:

1. `Before`: `""`
2. `Tag`: `"Heading"`
3. `After`: `""`

...and therefore a final result of `ComponentRegistry[Tag]`, or `"<h1>{children}</h1>"`.
