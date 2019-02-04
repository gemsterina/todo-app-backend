const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.post('/tasks', function (request, response) {

const answer = {
    message: "Your task was posted"
}

  response.json(answer);
})

module.exports.handler = serverless(app);