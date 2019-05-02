exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", table => {
    table.increments();

    table
      .string("name", 255)
      .notNullable()
      .unique();

    table
      .integer("dish_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.string("instructions").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
