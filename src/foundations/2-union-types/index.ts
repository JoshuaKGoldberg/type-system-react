export let descriptor: {
  power: string | number;
};

descriptor = { power: 9001 }; // Ok
descriptor = { power: "over 9000" }; // Ok

descriptor = { power: true };
//             ~~~~~
// Type 'boolean' is not assignable to type 'string | number'.
