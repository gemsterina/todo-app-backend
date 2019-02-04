const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/tasks', function (request, response) {

  const taskList = [
    {
      description: "Buy milk",
      id: 1,
      completed: true
    },
    {
      description: "Fix car",
      id: 2,
      completed: false
    },
    {
      description: "Present for mum's birthday",
      id: 3,
      completed: false
    },
    {
      description: "Cinema tickets",
      id: 4,
      completed: true
    },

  ];

  response.json(taskList);
})

module.exports.handler = serverless(app);