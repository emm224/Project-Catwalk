var models = require('../models');

const getReviews = function(req, res) {
  models.reviewModels.getReviews(req.query.id, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(reviews);
    }
  });
}

const getReviewMetadata = function(req, res) {
  models.reviewModels.getReviewMetadata(req.query.id, (err, metadata) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(metadata);
    }
  });
}

// const addReview = function(req, res) {
//   console.log(req.body);
//   models.reviewModels.addReview(req.body.id, req.body.review, (err, review) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       console.log('Review posted');
//       res.sendStatus(201);
//     }
//   });
// }

const markHelpful = function(req, res) {
  models.reviewModels.markHelpful(req.body.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).json(data);
    }
  });
}

const reportReview = function(req, res) {
  models.reviewModels.reportReview(req.body.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).json(data);
    }
  });
}

module.exports = {
  getReviews,
  getReviewMetadata,
  // addReview,
  markHelpful,
  reportReview
}