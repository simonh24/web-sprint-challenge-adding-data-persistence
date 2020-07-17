
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: "seed task 1", projectId: 1},
        {description: "seed task 2", notes: "seed notes 1", projectId: 1},
        {description: "seed task 3", notes: "seed notes 2", completed: true, projectId: 2},
        {description: "seed task 2", notes: "seed notes 2", completed: true, projectId: 3},
      ]);
    });
};
