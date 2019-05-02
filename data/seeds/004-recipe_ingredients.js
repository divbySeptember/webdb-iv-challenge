exports.seed = function(knex) {
  return knex("recipeIngredients").insert([
    {
      id: 1,
      ingredient_id: 1,
      dish_id: 1,
      amount: 1,
      measure: "grams"
    },
    {
      id: 2,
      ingredient_id: 2,
      dish_id: 2,
      amount: 1,
      measure: "grams"
    },
    {
      id: 3,
      ingredient_id: 3,
      dish_id: 3,
      amount: 1,
      measure: "grams"
    },
    {
      id: 4,
      ingredient_id: 4,
      dish_id: 4,
      amount: 1,
      measure: "grams"
    },
    {
      id: 5,
      ingredient_id: 5,
      dish_id: 5,
      amount: 1,
      measure: "grams"
    },
    {
      id: 6,
      ingredient_id: 6,
      dish_id: 6,
      amount: 1,
      measure: "grams"
    }
  ]);
};
