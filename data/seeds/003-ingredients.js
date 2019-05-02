exports.seed = function(knex) {
  return knex("dishes").insert([
    { id: 1, name: "sugar" },
    { id: 2, name: "lettuce" },
    { id: 3, name: "bun" },
    { id: 4, name: "milk" },
    { id: 5, name: "oatmeal" },
    { id: 6, name: "bread" }
  ]);
};
