# Fun > 8. Multiple Type Parameters

That `"<h1>{children}</h1>"` result from rendering `Heading` isn't quite what we want.
We'd want the `"{children}"` part to be replaced with the children provided to the component.

Previously, `Render` had ignored the characters between `<Tag>` and `<Tag />` - just asking for any `string`.
This `index.d.ts` file's `Render` instead captures those characters as an `infer Children`, then passes both `Tag` and `Children` to a `RenderComponent<Tag, Children>` type.

That `RenderComponent` type checks if the `Children` contains a `"{children"}`, and replaces that text with `Children` if so.
