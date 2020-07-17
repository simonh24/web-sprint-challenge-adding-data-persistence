const express = require('express');
const Projects = require('./projectsModel.js');
const router = express.Router();

router.get('/projects', (req, res) => {
    let outarr = [];
    Projects.getProjects()
        .then(projs => {
            // res.status(200).json(projs);
            projs.map(proj => {
                if (proj.completed === 0 || proj.completed === null) {
                    outarr.push({ ...proj, completed: false });
                } else {
                    outarr.push({ ...proj, completed: true });
                }
            })
            res.status(200).json(outarr);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.post('/projects', (req, res) => {
    Projects.addProject(req.body)
        .then(proj => {
            res.status(201).json(proj)
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.post('/resources', (req, res) => {
    Projects.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.get('/tasks', (req, res) => {
    let outarr = []
    Projects.getTasks()
        .then(tasks => {
            tasks.map(task => {
                if (task.taskCompleted === 0 || task.taskCompleted === null) {
                    outarr.push({ ...task, taskCompleted: false });
                } else {
                    outarr.push({ ...task, taskCompleted: true });
                }
            })
            res.status(200).json(outarr);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.post('/projects/:id/tasks', (req, res) => {
    Projects.addTask({...req.body, projectId: req.params.id})
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.get('/projectResources', (req, res) => {
    let outarr = [];
    Projects.getProjectResources()
        .then(prs => {
            prs.map(pr => {
                if (pr.completed === 0 || pr.completed === null) {
                    outarr.push({ ...pr, completed: false });
                } else {
                    outarr.push({ ...pr, completed: true });
                }
            })
            res.status(200).json(outarr);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

module.exports = router;