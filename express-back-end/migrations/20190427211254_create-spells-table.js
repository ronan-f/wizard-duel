
exports.up = function(knex, Promise) {
  return knex.schema.createTable('spells', function(t) {
    t.increments('id').primary();
    t.string('name').notNull();
    t.string('description').notNull();
    t.integer('cost').notNull();
    t.integer('limit').notNull();
    t.integer('power').notNull();
    t.integer('turns').notNull();
    t.boolean('affect_opponent').notNull();
    t.integer('unlock_level').notNull();
    t.boolean('light').notNull();
    t.boolean('dark').notNull();
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spells')
};
