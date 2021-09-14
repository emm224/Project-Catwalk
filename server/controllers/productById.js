var models = require('../models')

module.exports = {
  getProduct: function (req, res) {
    models.productContext.getProductById(req.body.id, (err, productData) => {
      if (err) {
        res.send(400 + 'Product was not found');
      } else {
        res.json(productData);
      }
    });

  }
}
