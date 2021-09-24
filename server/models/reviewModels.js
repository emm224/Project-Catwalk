const axios = require('axios');
const config = require('../../config.js');

let options = {
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`,
  head: {
    headers: {
      'Authorization': config.TOKEN
    }
  }
};

const getReviews = function(id, callback) {
  axios.get(`${options.url}/?product_id=${id}`, options.head)
    .then(({data}) => {
      callback(null, data);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    })
}

const getReviewMetadata = function(id, callback) {
  axios.get(`${options.url}/meta/?product_id=${id}`, options.head)
    .then(({data}) => {
      callback(null, data);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    })
}

const addReview = function(review, callback) {
  let postOptions = {
    method: 'POST',
    url: options.url,
    data: review,
    head: {
      headers: {
        'Authorization': config.TOKEN
      }
    }
  };

  axios(postOptions)
    .then(({data}) => {
      callback(null, data);
    })
    .catch((err) => {
      console.error(err);
      callback(err);
    })
}

const markHelpful = function(id, callback) {
  axios.put(`${options.url}/${id}/helpful`, null, options.head)
    .then(({data}) => {
      callback(null, data);
    })
    .catch((err) => {
      console.error(err);
      callback(err);
    })
}

const reportReview = function(id, callback) {
  axios.put(`${options.url}/${id}/report`, null, options.head)
    .then(({data}) => {
      callback(null, data);
    })
    .catch((err) => {
      console.error(err);
      callback(err);
    })
}

module.exports = {
  getReviews,
  getReviewMetadata,
  addReview,
  markHelpful,
  reportReview
}