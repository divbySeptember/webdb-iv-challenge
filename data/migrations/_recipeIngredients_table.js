exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipeIngredients", table => {
    table.increments();

    table
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("ingredients_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.float("amount").notNullable();
    table.string("measurement").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipeIngredients");
};
