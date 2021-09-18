const axios = require('axios');
const config = require('../../config.js');

const QueryStringInput = (input, flag='') => {

  if (input === undefined) {
    return '';
  } else if (flag) {
    return `${flag}=${input}`;
  } else {
  return `/${input}`;
  }
};

const getQuestions = (query, callback) => {
  // console.log('ProductID query: ', query);

  query.product_id = QueryStringInput(query.product_id, '?product_id');
  query.page = QueryStringInput(query.page, '&page');
  query.count = QueryStringInput(query.count, '&count=50');

  // GET QUESTIONS
  let queryString = query.product_id + query.page + query.count;

  // GET ANSWERS
  if (query.question_id) {

    if (query.page) {
      query.page = `/?${query.page}`;

      if (query.count) {
        query.count = `&${query.count}`;
      }

    } else if (query.count) {
      query.count = `/?${query.count}`;
    }

    queryString = `/${query.question_id}/answers/${query.page}${query.count}`;
    console.log('QueryString: ', queryString);
  }
  console.log('QueryString: ', queryString);

  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions${queryString}`,
    {
      headers: {
        "Authorization": config.TOKEN,
        "Content-Type": "application/json"
      }
    }
  )
  .then((response) => {
    // console.log('Fetch All Qs Response: ', response.data);
    callback(null, response.data);
  })
  .catch((error) => {
    console.log('Fetching API Q Error: ', error);
    callback(error);
  });
};

const postQuestions = (query, callback) => {

  axios.post(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`, query,
    {
      headers: {
        "Authorization": config.TOKEN,
        "Content-Type": "application/json"
      }
    }
  )
  .then((response) => {
    console.log('Created Question: ', response.data);
    callback(null, response.data);
  })
  .catch((error) => {
    console.log('Could not create API Q Error: ', error);
    callback(error);
  });
};

const postAnswers = (query, callback) => {

  axios.post(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${query.question_id}/answers`, query,
    {
      headers: {
        Authorization: config.TOKEN
      },
    },
  )
  .then((response) => {
    console.log('Created Answer: ', response.data);
    callback(null, response.data);
  })
  .catch((error) => {
    console.log('Could not create API Q Answer: ', error);
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
module.exports.postQuestions = postQuestions;
module.exports.putQuestions = putQuestions;