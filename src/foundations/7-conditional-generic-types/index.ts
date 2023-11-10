export type PowerLevel = `over ${number}`;

export type WithPower<Value> = Value extends PowerLevel
  ? { happy: Value }
  : { sad: Value };

export let withPowerStringy: WithPower<PowerLevel>;

withPowerStringy = { happy: "over 9000" }; // Ok

withPowerStringy = { sad: -1 };
//                   ~~~
// Type '{ sad: number; }' is not assignable to type '{ happy: `over ${number}`; }'.
//  Object literal may only specify known properties,
//  and 'sad' does not exist in type '{ happy: `over ${number}`; }'.

export let withPowerNumeric: WithPower<number>;

withPowerNumeric = { happy: "over 9000" };
//                   ~~~~~
// Type '{ happy: string; }' is not assignable to type '{ sad: -1; }'.
//  Object literal may only specify known properties,
//  and 'happy' does not exist in type '{ sad: -1; }'.

withPowerNumeric = { sad: -1 }; // Ok

export let withPowerOopsies: WithPower<boolean>; // Ok ?!
