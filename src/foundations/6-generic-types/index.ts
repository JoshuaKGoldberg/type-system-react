export type PowerLevel = `over ${number}`;

export type WithPower<Value> = {
  power: Value;
};

export let descriptor: WithPower<PowerLevel | -1>;

descriptor = { power: -1 }; // ok
descriptor = { power: "over 9000" }; // Ok

descriptor = { power: "a lot" };
//             ~~~~~
// Type '"a lot"' is not assignable to type '`over ${number}` | -1'.
