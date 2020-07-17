const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTask,
    getProjectResources
};

function getProjects() {
    return db('projects');
}

function addProject(proj) {
    return db('projects').insert(proj);
}

function getResources() {
    return db('resources');
}

function addResource(resource) {
    return db('resources').insert(resource);
}

function getTasks() {
    return db('projects').select('tasks.id', 'projects.projectName', 'projects.description as projectDescription', 'tasks.description as taskDescription', 'tasks.completed as taskCompleted', 'tasks.notes as taskNotes').join('tasks', 'projects.id', '=', 'tasks.projectId');
}

function addTask(task) {
    return db('tasks').insert(task);
}

function getProjectResources() {
    return db('projectResources').select('projects.id', 'projects.projectName', 'projects.description', 'projects.completed', 'resources.resourceName').join('projects', 'projects.id', '=', 'projectResources.projectId').join('resources', 'resources.id', '=', 'projectResources.resourceId');
}