const axios = require('axios');
// const config = require('../..config.js');

var fecTOKEN = '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';
var reviewsUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`;


const getReviews = function(page, count, sort, product_id, callback) {
  let options = {
    url: reviewsUrl,
    head: {
      headers: {
        Authorization: fecTOKEN
      }
    }
  };

  axios.get(options.url, options.head)
    .then(({data}) => {
      callback(null, data);
    })
    .catch((err) => {
      console.error(err);
      callback(err)
    })
}

const getReviewMetadata = function(callback) {
}

const addReview = function(callback) {
}

const markHelpful = function(callback) {
}

const reportReview = function(callback) {
}

module.exports = {
  getReviews,
  getReviewMetadata,
  addReview,
  markHelpful,
  reportReview
}