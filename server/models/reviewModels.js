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
//https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=37311

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
//https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=37311

  axios.get(`${options.url}/meta/?product_id=${id}`, options.head)
    .then(({data}) => {
      callback(null, data);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    })
}

// const addReview = function(id, review, callback) {

//   let newReview = {
//     rating: review.rating,
//     summary: review.summary,
//     body: review.body,
//     recommend: review.recommend,
//     name: review.name,
//     date: review.date,
//     email: review.email,
//     photos: review.photos,
//     characteristics: review.characteristics
//   }

//   axios.post(`${options.url}/?product_id=${id}`, newReview, options.head)
//     .then(({data}) => {
//       console.log('Your review: ', data);
//       callback(null, data);
//     })
//     .catch((err) => {
//       console.error(err);
//       callback(err);
//     })
// }

const markHelpful = function(id, callback) {
  axios.put(`${options.url}/${id}/helpful`, options.head)
    .then(({data}) => {
      console.log('Review marked as helpful.', data);
      callback(null, data);
    })
    .catch((err) => {
      console.error(err);
      callback(err);
    })
}

const reportReview = function(id, callback) {
  axios.put(`${options.url}/${id}/report`, id, options.head)
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
  // addReview,
  markHelpful,
  reportReview
}