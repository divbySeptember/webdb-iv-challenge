exports.seed = function(knex) {
  return knex("recipes").insert([
    {
      id: 1,
      name: "cheese pizza",
      dish_id: 1,
      instructions: "cheese pizza instructions"
    },
    {
      id: 2,
      name: "ham sandwich",
      dish_id: 2,
      instructions: "ham sandwich instructions"
    },
    {
      id: 3,
      name: "cheeseburger",
      dish_id: 3,
      instructions: "cheeseburger instructions"
    },
    {
      id: 4,
      name: "vanilla ice cream",
      dish_id: 4,
      instructions: "vanilla ice cream instructions"
    },
    {
      id: 5,
      name: "romaine salad",
      dish_id: 5,
      instructions: "romaine salad instructions"
    },
    { id: 6, name: "salmon", dish_id: 6, instructions: "salmon instructions" }
  ]);
};
