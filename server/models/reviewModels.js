const axios = require('axios');
const config = require('../../config.js');

const reviewsUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`;

let options = {
  url: reviewsUrl,
  head: {
    headers: {
      Authorization: config.TOKEN
    }
  }
};


// // ?product_id=37311
// const getReviews = (id, callback) => {
//   axios.get(`${options.url}/reviews/${id}`, options.head)
//     .then((reviews) => {
//       console.log('Reviews: ', reviews.data);
//       callback(null, reviews.data);
//     })
//     .catch((err) => {
//       console.error(err);
//       callback(err);
//     })
// }

const getReviewMetadata = function(id, callback) {
  axios.get(`${options.url}/meta/?product_id=${id}`, options.head)
    .then(({data}) => {
      console.log('Reviews Metadata: ', data);
      callback(null, data);
    })
    .catch((err) => {
      console.error(err);
      callback(err);
    })
}

// const addReview = function(review, callback) {

//   let newReview = {
//     product_id: review.product_id,
//     rating: review.rating,
//     summary: review.summary,
//     body: review.body,
//     recommend: review.recommend,
//     name: review.name,
//     email: review.email,
//     photos: review.photos,
//     characteristics: review.characteristics
//   }

//   axios.post(options.url, newReview, options.head)
//   .then(({data}) => {
//     console.log('Your review: ', data);
//     callback(null, data);
//   })
//   .catch((err) => {
//     console.error(err);
//     callback(err);
//   })
// }
// const markHelpful = function(review_id, callback) {
//   axios.put(`${options.url}/:review_id/helpful`, review_id, options.head)
//     .then(({data}) => {
//       console.log('Review marked as helpful.', data);
//       callback(null, data);
//     })
//     .catch((err) => {
//       console.error(err);
//       callback(err);
//     })
// }

// const reportReview = function(review_id, callback) {
//   axios.put(`${options.url}/:review_id/report`, review_id, options.head)
//     .then(({data}) => {
//       console.log('Review reported.', data);
//       callback(null, data);
//     })
//     .catch((err) => {
//       console.error(err);
//       callback(err);
//     })
// }

module.exports = {
  // getReviews,
  getReviewMetadata,
  // addReview,
  // markHelpful,
  // reportReview
}