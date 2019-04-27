require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database : "wizard_duel",
      user     : "development",
      password : "development",
      hostname : 'localhost',
      port     : 3000,
      ssl      : true,
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
  },

};
