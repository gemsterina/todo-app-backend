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

app.post('/tasks', function (request, response) {

    console.log('You posted a task saying ' + request.body.taskDescription);

    const answer = {
        message: "Your POST request was accepted",
        description: request.body.taskDescription
    }

    response.json(answer);
})

app.put('/tasks/:taskId', function (request, response) {

    const taskId = request.params.taskId;

    const answer = {
        message: "Your PUT request was accepted with task ID: " + taskId
    }

    response.json(answer);
})

app.delete('/tasks/:taskId', function (request, response) {

    const taskId = request.params.taskId;

    const answer = {
        message: "Your DELETE request was accepted with task ID: " + taskId
    }

    response.json(answer);
})

module.exports.handler = serverless(app);