const express = require('express');
const morgan = require('morgan');
const router = require('./routes.js');

const questions = require('./models/questionsAPI.js');

let app = express();
let port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/api/products', router);


// ================ Questions & Answers  ===========================
app.get('/qa/questions', (req, res) => {

  questions.getQuestions(req.query, (error, results) => {

    if (error) {
      res.status(404).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/qa/questions', (req, res) => {

  questions.postQuestions(req.body, (error, results) => {

    if (error) {
      console.log('Posting Qs Server error. REQ.BODY: ', req.body)
      res.status(404).send(error);
    } else {
      res.status(201).send(results);
    }
  }),

  questions.postAnswers(req.body, (error, results) => {

    if (error) {
      console.log('Posting Ans Server error. REQ.BODY: ', req.body)
      res.status(404).send(error);
    } else {
      res.status(201).send(results);
    }
  });
});

app.put('/qa/questions', (req, res) => {
  questions.putQuestions(req.body, (error, data) => {
    if (error) {
      console.log('PUT ERROR', req)
      res.status(404).send(req.body);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
