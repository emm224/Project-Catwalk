var models = require('../models');

module.exports = {
  getProductList: function (req, res) {
    // console.log(req.body)
    models.productContext.getProductList((err, productList) => {
      // console.log(productList)
      if (err) {
        res.send(404 + 'Unable to grab product list');
      } else {
        res.send(productList);
      }
    });
  }

};


