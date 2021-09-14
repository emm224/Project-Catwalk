var models = require('../models');

const getReviews = function (req, res) {
  models.getReviews(req.body.page, req.body,count, req.body.sort, req.body.product_id, (err, reviews) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.send(reviews);
    }
  });
}

const getReviewMetadata = function(req, res) {
}

const addReview = function(req, res) {
}

const markHelpful = function(req, res) {
}

const reportReview = function(req, res) {
}



module.exports = {
  getReviews,
  getReviewMetadata,
  addReview,
  markHelpful,
  reportReview

};
