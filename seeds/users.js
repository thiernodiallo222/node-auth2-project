
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'username-one',
          password: 'password-One',
          department: 'Human resources'
        },
        {
          username: 'username-two',
          password: 'password-Two',
          department: 'Sales'
        },
        {
          username: 'username-tree',
          password: 'password-Three',
          department: 'Production'
        }
      ]);
    });
};

