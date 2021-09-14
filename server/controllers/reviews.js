var models = require('../models');

const getReviews = function(req,res) {
  //models.reviews.getReviews
}
const getReviewMetadata = function(req,res) {
  //models.reviews.getReviewMetadata
}
const addReview = function(req,res) {
  //models.reviews.addReview
}
const markHelpful = function(req,res) {
  //models.reviews.markHelpful
}
const reportReview = function(req,res) {
  //models.reviews.reportReview
}


module.exports = {
  getReviews,
  getReviewMetadata,
  addReview,
  markHelpful,
  reportReview
}