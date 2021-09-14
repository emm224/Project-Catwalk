var controller = require('./controllers');
// var productList = require('./controllers/productList.js')
var router = require('express').Router();

router.get('/productsList', controller.productList.getProductList);

router.get('/product', controller.productById.getProduct);

router.get('/productStyles', controller.getProductStyles.getProductStyles);

router.get('/cart', controller.cart.getAllInCart);

router.post('/cart', controller.cart.addProductToCart);

// ========= Questions and Answers ========================
router.get('/qa/questions', controller.questions.get);

router.post('/qa/questions', controller.questions.post);

router.put('/qa/questions', controller.questions.put);


module.exports = router;