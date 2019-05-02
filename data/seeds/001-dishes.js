exports.seed = function(knex) {
  return knex("dishes").insert([
    { name: "pizza" },
    { name: "sandwich" },
    { name: "burger" },
    { name: "ice cream" },
    { name: "salad" },
    { name: "fish" }
  ]);
};
