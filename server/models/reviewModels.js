const axios = require('axios');
const config = require('../../config.js');

const reviewsUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`;
const fecTOKEN = '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';
let options = {
  url: reviewsUrl,
  head: {
    headers: {
      Authorization: config.TOKEN || fecTOKEN
    }
  }
};

const getReviews = function(page=1, count=5, sort='relevant', product_id, callback) {
  axios.get(options.url, options.head)
    .then(({data}) => {
      console.log('Reviews: ', data);
      callback(null, data);
    })
    .catch((err) => {
      console.error(err);
      callback(err);
    })
}
const getReviewMetadata = function(product_id, callback) {
  axios.get(`${options.url}/meta`, options.head)
    .then(({data}) => {
      console.log('Reviews Metadata: ', data);
      callback(null, data);
    })
    .catch((err) => {
      console.error(err);
      callback(err);
    })
}
const addReview = function(product_id, rating, summary, body, recommend, name, email, photos, characteristics, callback) {

  let review = {
    product_id: product_id,
    rating: rating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: name,
    email: email,
    photos: photos,
    characteristics: characteristics
  }

  axios.post(options.url, review, options.head)
  .then(({data}) => {
    console.log('Your review: ', data);
    callback(null, data);
  })
  .catch((err) => {
    console.error(err);
    callback(err);
  })
}
const markHelpful = function(review_id, callback) {
  axios.put(`${options.url}/:review_id/helpful`, review_id, options.head)
    .then(({data}) => {
      console.log('Review marked as helpful.', data);
      callback(null, data);
    })
    .catch((err) => {
      console.error(err);
      callback(err);
    })
}

const reportReview = function(review_id, callback) {
  axios.put(`${options.url}/:review_id/report`, review_id, options.head)
    .then(({data}) => {
      console.log('Review reported.', data);
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