# Fun > 3. Inferred Template Literal Types

Inferred types can be matched with template literal types.
Doing so allows us to check whether a provided string type matches some template.
We can then pull out pieces that matched.

Here, `Render<Raw extends string>` checks whether `Raw` matches `"<${Tag} />"`, where `Tag` must be a `Component`.
A type argument like `<Emoji />` would have `Tag` matched to `"Emoji"`, making a result of `"✨"`.
