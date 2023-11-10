export let descriptor: {
  power: string | -1;
};

descriptor = { power: -1 }; // Ok
descriptor = { power: "over 9000" }; // Ok

descriptor = { power: 9001 };
//             ~~~~~
// Type '9000' is not assignable to type 'string | -1'.
