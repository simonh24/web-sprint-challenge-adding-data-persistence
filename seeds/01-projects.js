
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projectName: 'seed project name 1'},
        {projectName: 'seed project name 2', description: 'seed project with description'},
        {projectName: 'seed project name 3', description: 'seed project with description', completed: true},
      ]);
    });
};
