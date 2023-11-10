export type ComponentRegistry = {
  Emoji: "✨";
  Heading: "<h1>{children}</h1>";
};

export type Component = keyof ComponentRegistry;

export type Render<Raw extends string> =
  Raw extends `${infer Before}<${infer Tag extends Component} />${infer After}`
    ? `${Before}${ComponentRegistry[Tag]}${After}`
    : Raw;

export type PrintMe = Render<"Hello, world! <Emoji />">;
//          ^?
