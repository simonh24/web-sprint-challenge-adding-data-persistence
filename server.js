const express = require('express');

const projectRouter = require('./projects/projectsRouter.js');

const server = express();

server.use(express.json());
server.use('/api', projectRouter);

server.get('/', (req, res) => {
  res.send('<h2>Server is running</h2>')
})

module.exports = server;