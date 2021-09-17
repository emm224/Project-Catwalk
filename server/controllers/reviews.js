var models = require('../models');

const getReviews = function(req, res) {
  models.reviewModels.getReviews(req.body.id, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(`Product ${req.body.id} reviews: `, reviews);
      res.status(200).json(reviews);
    }
  });
}

const getReviewMetadata = function(req, res) {
  models.reviewModels.getReviewMetadata(req.body.id, (err, metadata) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(`Product ${req.body.id} metadata: `, metadata);
      res.status(200).json(metadata);
    }
  });
}

const addReview = function(req, res) {
  console.log(req.body);
  models.reviewModels.addReview(req.body.id, req.body.review, (err, review) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('Review posted');
      res.sendStatus(201);
    }
  });
}

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
  addReview,
  // markHelpful,
  // reportReview
}