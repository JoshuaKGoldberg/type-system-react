export type ComponentRegistry = {
  Emoji: "✨";
  Heading: "<h1>{children}</h1>";
};

export type Component = keyof ComponentRegistry;
//          ^?

export type Render<Tag extends Component> = ComponentRegistry[Tag];

export type PrintMe = Render<"Emoji">;
//          ^?
