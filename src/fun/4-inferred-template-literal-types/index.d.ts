export type ComponentRegistry = {
  Emoji: "✨";
  Heading: "<h1>{children}</h1>";
};

export type Component = keyof ComponentRegistry;

export type Render<Raw extends string> = Raw extends `<${infer Tag extends
  Component} />`
  ? ComponentRegistry[Tag]
  : Raw;

export type PrintMe = Render<"<Emoji />">;
//          ^?
