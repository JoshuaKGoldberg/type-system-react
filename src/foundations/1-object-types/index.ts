export let descriptor: {
  power: number;
};

descriptor = { power: 9001 }; // Ok

descriptor = { power: "over 9000" };
//             ~~~~~
// Type 'string' is not assignable to type 'number'.

descriptor = {};
// Property 'power' is missing in type '{}'
// but required in type '{ power: number; }'.

descriptor = { name: "Josh", power: 9001 };
//             ~~~~
// Type '{ name: string; }' is not assignable to type '{ power: number; }'.
//  Object literal may only specify known properties,
//  and 'name' does not exist in type '{ power: number; }'.
