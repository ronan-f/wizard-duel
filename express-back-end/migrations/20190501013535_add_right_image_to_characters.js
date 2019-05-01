exports.up = function(knex, Promise) {
  return knex.schema.table('characters', function(t) {
      t.string('right_image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('characters', function(t) {
      t.dropColumn('right_image');
  });
};