export type PowerLevel = `over ${number}`;

export type WithPower = {
  power: PowerLevel | -1;
};

export let descriptor: WithPower;

descriptor = { power: -1 }; // Ok
descriptor = { power: "over 9000" }; // Ok

descriptor = { power: "over 9k" };
//             ~~~~~
// Type '"over 9k"' is not assignable to type '`over ${number}` | -1'.

descriptor = { power: "under 9000" };
//             ~~~~~
// Type '"over 9k"' is not assignable to type '`over ${number}` | -1'.
