var models = require('../models')

module.exports = {
  getProductStyles: function (req, res) {
    models.productContext.getProductStyles(req.query.id, (err, productStyles) => {
      if (err) {
        res.send(400 + 'Product was not found');
      } else {
        res.json(productStyles);
      }
    });

  }
}