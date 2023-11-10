export type ComponentRegistry = {
  Emoji: "✨";
  Heading: "<h1>{children}</h1>";
};

export type Component = keyof ComponentRegistry;

export type Render<Raw extends string> =
  Raw extends `${infer Before}<${infer Tag extends Component} />${infer After}`
    ? `${Before}${ComponentRegistry[Tag]}${Render<After>}`
    : Raw extends `${infer Before}<${infer Tag extends Component}>${string}</${infer Tag}>${infer After}`
    ? `${Before}${ComponentRegistry[Tag]}${Render<After>}`
    : Raw;

export type PrintMe = Render<"<Heading>Hello, world! <Emoji /></Heading>">;
//          ^?
