var models = require('../models')

module.exports = {
  getProduct: function (req, res) {
    // console.log('this is body', req.query)
    models.productContext.getProductById(req.query.id, (err, productData) => {
      if (err) {
        res.send(400 + 'Product was not found');
      } else {
        res.json(productData);
      }
    });

  }
}
