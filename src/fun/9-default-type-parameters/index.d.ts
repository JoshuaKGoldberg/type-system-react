export type ComponentRegistry = {
  Emoji: "✨";
  Heading: "<h1>{children}</h1>";
};

export type Component = keyof ComponentRegistry;

export type RenderComponent<
  Tag extends Component,
  Children extends string = ""
> = ComponentRegistry[Tag] extends `${infer Before}{children}${infer After}`
  ? `${Before}${Render<Children>}${After}`
  : ComponentRegistry[Tag];

export type Render<Raw extends string> =
  Raw extends `${infer Before}<${infer Tag extends Component} />${infer After}`
    ? `${Before}${RenderComponent<Tag>}${Render<After>}`
    : Raw extends `${infer Before}<${infer Tag extends Component}>${infer Children}</${infer Tag}>${infer After}`
    ? `${Before}${RenderComponent<Tag, Children>}${Render<After>}`
    : Raw;

export type PrintMe = Render<"<Heading>Hello, world! <Emoji /></Heading>">;
//          ^?
