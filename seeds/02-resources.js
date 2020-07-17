
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resourceName: 'laptop'},
        {resourceName: 'computer', description: 'desktop computer bla bla bla'},
      ]);
    });
};
