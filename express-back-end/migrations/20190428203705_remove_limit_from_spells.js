exports.up = function(knex, Promise) {
  return knex.schema.table('spells', function(t) {
      t.dropColumn('limit');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('spells', function(t) {
      t.enum('limit').notNull();
  });
};