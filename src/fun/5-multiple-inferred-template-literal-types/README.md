# Fun > 5. Multiple Inferred Template Literal Types

This `index.d.ts` has a lot more syntax, but it's all the same features we've seen before.
`Render<Raw extends string>` checks whether `Raw` is a string with the following pieces:

1. `infer Before`: any string
2. `"<"`
3. `"${infer Tag extends Component}`
4. `" />"`
5. `infer After`: any string

If that's matched, then the result is a string with the following pieces:

1. `Before`
2. `ComponentRegistry[Tag]`
3. `After`

In the case of `Render<"Hello, world! <Emoji />">`:

1. `infer Before` resolves to `"Hello, world! "`
2. `Tag` resolves to `"Emoji"`, so `ComponentRegistry[Tag]` resolves to `"✨"`
3. `infer After` resolves to `""`
