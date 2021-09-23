var controller = require('./controllers');
// var productList = require('./controllers/productList.js')
var router = require('express').Router();

router.get('/productsList', controller.productList.getProductList);

router.get('/product', controller.productById.getProduct);

router.get('/productStyles', controller.getProductStyles.getProductStyles);

router.get('/cart', controller.cart.getAllInCart);

router.post('/cart', controller.cart.addProductToCart);


// ========= Ratings and Reviews ==========================
router.get('/reviews', controller.reviews.getReviews);

router.get('/reviews/meta', controller.reviews.getReviewMetadata);

// router.post('/reviews', controller.reviews.addReview);
//
router.put('/reviews/helpful', controller.reviews.markHelpful);

router.put('/reviews/report', controller.reviews.reportReview);






// Exports
module.exports = router;