exports.up = function(knex, Promise) {
  return knex.schema.table('spells', function(t) {
      t.integer('cast_limit').notNull().defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('spells', function(t) {
      t.dropColumn('cast_limit');
  });
};