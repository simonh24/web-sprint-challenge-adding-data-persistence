
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projectResources').del()
    .then(function () {
      // Inserts seed entries
      return knex('projectResources').insert([
        {projectId: 1, resourceId: 1},
        {projectId: 1, resourceId: 2},
        {projectId: 2, resourceId: 1},
        {projectId: 3, resourceId: 2},
      ]);
    });
};
