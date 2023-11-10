export type PowerLevel = `over ${number}`;

export type WithPower<Value extends PowerLevel | -1> = Value extends PowerLevel
  ? { happy: Value }
  : { sad: Value };

export let withPowerStringy: WithPower<PowerLevel>;

withPowerStringy = { happy: "over 9000" }; // Ok

withPowerStringy = { sad: "over 9000" };
//                   ~~~
// Type '{ sad: number; }' is not assignable to type '{ happy: `over ${number}`; }'.
//  Object literal may only specify known properties,
//  and 'sad' does not exist in type '{ happy: string; }'.

export let withPowerOopsies: WithPower<boolean>;
//                                     ~~~~~~~
// Type 'boolean' does not satisfy the constraint '`over ${number}` | -1'.
