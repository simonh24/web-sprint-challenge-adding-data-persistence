const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTask,
    getIdTask,
    getProjectResources,
    getResourceProjects
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

function getIdTask(id) {
    return db('projects').select('tasks.id', 'projects.projectName', 'projects.description as projectDescription', 'tasks.description as taskDescription', 'tasks.completed as taskCompleted', 'tasks.notes as taskNotes', 'tasks.projectId as projectId').join('tasks', 'projects.id', '=', 'tasks.projectId').where('projectId', id);
}

function getProjectResources() {
    return db('projectResources').select('projects.id', 'projects.projectName', 'projects.description', 'projects.completed', 'resources.resourceName', 'resources.description as resourceDescription').join('projects', 'projects.id', '=', 'projectResources.projectId').join('resources', 'resources.id', '=', 'projectResources.resourceId');
}

function getResourceProjects(id) {
    return db('projectResources').select('projectResources.id as id', 'projectResources.projectId', 'projects.projectName', 'projects.description as projectDescription', 'projects.completed', 'projectResources.resourceId', 'resources.resourceName', 'resources.description as resourceDescription').join('projects', 'projects.id', '=', 'projectResources.projectId').join('resources', 'resources.id', '=', 'projectResources.resourceId').where('resourceId', id);
}