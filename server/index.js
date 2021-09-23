const express = require('express');
const morgan = require('morgan');
const router = require('./routes.js');
const path = require('path');

const questions = require('./models/questionsAPI.js');

let app = express();
let port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname + '/../public')));
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
      console.log('post ERROR', error)
      // console.log('Req Body:', req.body.product_id)
      res.status(404).send(req.body);
    } else {
      res.status(200).send(results);
    }
  });
});

app.put('/qa/questions', (req, res) => {
  questions.putQuestions(req.body, (error, results) => {
    if (error) {
      console.log('PUT ERROR', req)
      res.status(404).send(req.body);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
