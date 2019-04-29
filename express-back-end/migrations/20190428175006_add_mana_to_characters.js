exports.up = function(knex, Promise) {
  return knex.schema.table('characters', function(t) {
      t.integer('mana').notNull().defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('characters', function(t) {
      t.dropColumn('mana');
  });
};