exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t) {
      t.increments('id').primary();
      t.string('username').notNull();
      t.string('email').notNull();
      t.string('password').notNull();
      t.bigInteger('experience_points').notNull();
      t.integer('wins');
      t.integer('losses');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
