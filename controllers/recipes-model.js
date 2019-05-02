const db = require("../config/knexConfig.js");

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe
};

function getRecipes() {
  return db("recipes");
}

function getRecipe(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function addRecipe(recipe) {
  return db("recipes").insert(recipe);
}
