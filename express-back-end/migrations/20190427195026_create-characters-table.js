exports.up = function(knex, Promise) {
  return knex.schema.createTable('characters', function(t) {
      t.increments('id').primary();
      t.string('name').notNull();
      t.string('army').notNull();
      t.integer('unlock_level').notNull();
      t.integer('rarity').notNull();
      t.string('image').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('characters')
};
