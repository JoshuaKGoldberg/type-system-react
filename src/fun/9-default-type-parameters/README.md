# Fun > 9. Default Type Parameters

The `RenderComponent` tag is actually quite useful.
It'd be nice if we could use it with self-closing tags too.
But it'd be inconvenient if we had to manually pass in `""` as `Children`.

TypeScript allows defining a default type for a type parameter.
Similar to default values in runtime function, adding a `=` and then the default means you don't need to provide an argument manually.

This `index.d.ts` defaults `RenderComponent`'s `Children` prop to `""` if not provided.
That allows a `RenderComponent<Tag>` to be used for a self-closing component and `RenderComponent<Tag, Children>` for a component with children.
