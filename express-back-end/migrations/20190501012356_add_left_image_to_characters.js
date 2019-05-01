exports.up = function(knex, Promise) {
  return knex.schema.table('characters', function(t) {
      t.string('left_image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('characters', function(t) {
      t.dropColumn('left_image');
  });
};