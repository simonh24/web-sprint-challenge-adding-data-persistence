
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('projectName').notNullable();
            tbl.string('description');
            tbl.boolean('completed').defaultTo(0);
        })

        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resourceName').notNullable().unique();
            tbl.string('description');
        })

        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('description').notNullable();
            tbl.string('notes');
            tbl.boolean('completed').defaultTo(0);
            tbl.integer('projectId').unsigned().notNullable().references('id').inTable('projects').onDelete("CASCADE");
        })

        .createTable('projectResources', tbl => {
            tbl.increments();
            tbl.integer('projectId').unsigned().notNullable().references('id').inTable('projects').onDelete("CASCADE");
            tbl.integer('resourceId').unsigned().notNullable().references('id').inTable('resources').onDelete("CASCADE");
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projectResources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};
