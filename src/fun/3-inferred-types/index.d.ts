export type ComponentRegistry = {
  Emoji: "✨";
  Heading: "<h1>{children}</h1>";
};

export type Component = keyof ComponentRegistry;

export type Render<Raw> = Raw extends {
  text: infer Tag extends Component;
}
  ? ComponentRegistry[Tag]
  : "(invalid)";

export type PrintMe = Render<{ text: "Emoji" }>;
//          ^?
