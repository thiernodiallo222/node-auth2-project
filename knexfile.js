// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: '../node-auth2-project/database/users.db3',
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};

