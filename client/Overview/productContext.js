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
const config = require('../config.js');

var baseUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe`

let getProductList = (callback) => {
  let options = {
    url: `${baseUrl}/products`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  };

  axios.get(options.url, options.headers)
  .then((products) => {
    console.log(products.data)
    callback(null, products.data)
  })
  .catch(err => {
    console.log(err)
    callback(err)
  })


let getProductById = (id, callback) => {
  let options = {
    url: `${baseUrl}/products/:${id}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  };

  axios.get(options.url, options.headers)
  .then((product) => {
    console.log(product.data)
    callback(null, product.data)
  })
  .catch(err => {
    console.log(err)
    callback(err)
  })

  let getProductStyles = (id, callback) => {
    let options = {
      url: `${baseUrl}/products/:${id}/styles`,
      headers: {
        'User-Agent': 'request',
        'Authorization': config.TOKEN
      }
    };

    axios.get(options.url, options.headers)
    .then((productStyles) => {
      console.log(productStyles.data)
      callback(null, productStyles.data)
    })
    .catch(err => {
      console.log(err)
      callback(err)
    })

    let addProductToCart = (callback) => {
      let options = {
        url: `${baseUrl}/cart`,
        headers: {
          'User-Agent': 'request',
          'Authorization': config.TOKEN
        }
      };

      axios.post(options.url, options.headers)
      .then((product) => {
        console.log(product.data)
        callback(null, product.data)
      })
      .catch(err => {
        console.log(err)
        callback(err)
      })

}

module.exports.getReposByUsername = getReposByUsername;