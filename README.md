# Type System React

A "fun" implementation of a JSX rendering engine similar to React's ... in the TypeScript type system.

```ts
export type ComponentRegistry = {
  Emoji: "💖";
  Heading: "<h1>{children}</h1>";
};

export type Result = Render<"<Heading>Hello, world! <Emoji /></Heading>">;

export type PrintMe = Result;
//          ^? type PrintMe = "<h1>Hello, world! 💖</h1>"
```

## End Goal

This walkthrough includes:

- Rendering a self-closing element
- Rendering an element with `{children}`
- Component registry
- Bugs (probably) (almost certainly) (definitely)

It does not include:

- Space-sensitive parsing
- Props other than `children`
- Logic, including hooks or state
- React Server Components

## What's Inside

1. `src/foundations`: Building up most of the general TypeScript syntax features we'll use to implement our JSX renderer
2. `src/fun`: Building up the JSX renderer using the foundational features

See the `README.md` files within each step, such as `src/foundations/0-types/README.md`.
