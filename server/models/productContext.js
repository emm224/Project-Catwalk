// var Parse = {

//   server: `https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe/products`,


//   readAll: function (successCB, errorCB = null) {
//     $.ajax({
//       url: Parse.server,
//       type: 'GET',
//       data: { order: '-createdAt' },
//       contentType: 'application/json',
//       success: successCB,
//       error: errorCB || function (error) {
//         console.error('chatterbox: Failed to fetch messages', error);
//       }
//     });
//   }

// };

const axios = require('axios');
const config = require('../../config.js');

var baseUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe`

let getProductList = (callback) => {
  let options = {
    url: `${baseUrl}/products`,
    head: {
      headers: {
        Authorization: config.TOKEN
      }
    }
  };

  axios.get(options.url, options.head)
    .then((products) => {
      callback(null, products.data)
    })
    .catch(err => {
      console.log(err)
      callback(err)
    })
}


let getProductById = (id, callback) => {
  let options = {
    url: `${baseUrl}/products/${id}`,
    head: {
      headers: {
        Authorization: config.TOKEN
      }
    },
  };

  axios.get(options.url, options.head)
    .then((product) => {
      // console.log(product.data)
      callback(null, product.data)
    })
    .catch(err => {
      // console.log(err)
      callback(err)
    })
}

let getProductStyles = (id, callback) => {
  let options = {
    url: `${baseUrl}/products/${id}/styles`,
    head: {
      headers: {
        Authorization: config.TOKEN
      }
    }
  };

  axios.get(options.url, options.head)
    .then((productStyles) => {
      callback(null, productStyles.data)
    })
    .catch(err => {
      callback(err)
    })
}

let addProductToCart = (item, callback) => {
  let options = {
    url: `${baseUrl}/cart`,
    head: {
      headers: {
        Authorization: config.TOKEN
      }
    }
  };

  axios.post(options.url, item, options.head)
    .then((product) => {
      callback(null, product.data)
    })
    .catch(err => {
      callback(err)
    })

}

let getAllInCart = (callback) => {
  let options = {
    url: `${baseUrl}/cart`,
    head: {
      headers: {
        Authorization: config.TOKEN
      }
    }
  };

  axios.get(options.url, options.head)
    .then((productsInCart) => {
      callback(null, productsInCart.data)
    })
    .catch(err => {
      callback(err)
    })

}


module.exports = {
  getProductList,
  getProductById,
  getProductStyles,
  addProductToCart,
  getAllInCart
};