const axios = require('axios');
const config = require('../../config.js');

// In an HTTP GET request, parameters are sent as a query string:

// In an HTTP POST or PUT request, the parameters are not sent along with the URI, but in the request body. Parameters noted for each route below follow this standard.

const getQuestions = (query, callback) => {

  // let queryString;

  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`,
    {
      headers: {
        "Authorization": "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",
        "Content-Type": "application/json"
      }
    }
  )
  .then((response) => {
    console.log('Fetch All Qs Response: ', response.data);
    callback(null, response.data);
  })
  .catch((error) => {
    console.log('Fetching Error: ', error);
    callback(error);
  });
};

const postQuestion = (query, callback) => {

  axios.post(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`, query,
    {
      headers: {
        "Authorization": "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",
        "Content-Type": "application/json"
      }
    }
  )
  .then((response) => {
    console.log('Created Question!: ', response.data);
    callback(null, response.data);
  })
  .catch((error) => {
    callback(error);
  });
};

const postAnswer = (query, callback) => {

  axios.post(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${query.question_id}/answers`, query,
    {
      headers: {
        Authorization: config.TOKEN
      },
    },
  )
  .then((response) => {
    console.log('Created Answer!: ', response.data);
    callback(null, response.data);
  })
  .catch((error) => {
    callback(error);
  });
};


const putQuestions = (query, callback) => {

  axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`, query,
    {
      headers: {
        Authorization: config.TOKEN
      },
    },
  )
  .then((response) => {
    console.log('Created Question!: ', response.data);
    callback(null, response.data);
  })
  .catch((error) => {
    callback(error);
  });
};

module.exports.getQuestions = getQuestions;
module.exports.postQuestion = postQuestion;
module.exports.putQuestions = putQuestions;