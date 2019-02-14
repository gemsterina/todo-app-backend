const serverless = require('serverless-http');
const express = require('express');
const app = express();
const databaseService = require('./databaseService');

app.use(express.json());

app.get('/tasks', function (request, response) {
    databaseService.getTasks()
        .then(function (tasks) {
            response.json(tasks);
        })
        .catch(function (error) {
            response.status(500);
            response.status(error)
        });

    // const taskList = [
    //     {
    //         description: "Buy milk",
    //         id: 1,
    //         completed: true
    //     },
    //     {
    //         description: "Fix car",
    //         id: 2,
    //         completed: false
    //     },
    //     {
    //         description: "Present for mum's birthday",
    //         id: 3,
    //         completed: false
    //     },
    //     {
    //         description: "Cinema tickets",
    //         id: 4,
    //         completed: true
    //     },

    // ];

    // response.json(taskList);
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