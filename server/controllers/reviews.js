var models = require('../models');

const getReviews = function(req, res) {
  models.reviewModels.getReviews(req.body.id, (err, reviews) => {
    if (err) {
      console.log(err);
      res.sendStatus(500)
    } else {
      console.log(`Product ${req.body.id} reviews: `, reviews);
      res.json(reviews);
    }
  });
}

const getReviewMetadata = function(req, res) {
  models.reviewModels.getReviewMetadata(req.body.id, (err, metadata) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(`Product ${req.body.id} metadata: `, metadata);
      res.json(metadata);
    }
  });
}

// const addReview = function(req, res) {
//   models.reviews.addReview(req.body, (err, review) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(500);
//     } else {
//       console.log('Review posted');
//       res.sendStatus(201);
//     }
//   });
// }

// const markHelpful = function(req, res) {
//   models.reviews.markHelpful(req.body.review_id, (err, data) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(500);
//     } else {
//       console.log('Review marked as helpful', data);
//       res.sendStatus(204);
//     }
//   });
// }

// const reportReview = function(req, res) {
//   models.reviews.reportReview(req.body.review_id, (err, data) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(500);
//     } else {
//       console.log('Review reported', data);
//       res.sendStatus(204);
//     }
//   });
// }

module.exports = {
  getReviews,
  getReviewMetadata,
  // addReview,
  // markHelpful,
  // reportReview
}