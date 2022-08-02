require('dotenv').config();
const express = require('express');
const path = require('path');
const controller = require('./controllers.js');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

// GET ROUTES
app.get('/qa/questions', controller.getQuestions);
// app.get('/qa/questions/:question_id/answers', controller.getAnswers);

// POST ROUTES
app.post('/qa/questions', controller.addQuestion);
app.post('/qa/questions/:question_id/answers', controller.addAnswer);

// PUT ROUTES
// add 4 app.put() but client doesnt account for

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}!`);
});