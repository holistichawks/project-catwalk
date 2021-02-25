const KEY = require('./index.js').KEY;
const axios = require('axios');

const getAllProducts = (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products', {
    headers:
      { 'Authorization' : `${KEY}` }
  }).then((resp) => {
    res.send(resp.data);
  }).catch((err) => {
    console.log('ERR', err);
  })
};

// getOneProduct func
const getOneProduct = (req, res) => {
  var id = req.params.product_id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`, {
    headers:
      { 'Authorization' : `${KEY}` }
  }).then((resp) => {
    res.send(resp.data);
  }).catch((err) => {
    res.status(400).send('Can not get this product')
  })
}



// getProductStyles funcs
const getProductStyles = (req, res) => {
  let id = req.params.product_id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/styles`, {
    headers:
      { 'Authorization' : `${KEY}` }
  }).then((resp) => {
    res.send(resp.data);
  }).catch((err) => {
    console.log('ERR', err);
  })
}


// getRelatedProducts funcs
const getRelatedProducts = (req, res) => {
  let id = req.params.product_id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/related`, {
    headers:
      { 'Authorization' : `${KEY}` }
  }).then((resp) => {
    res.send(resp.data);
  }).catch((err) => {
    console.log('ERR', err);
  })
};


module.exports = {
  getAllProducts,
  getOneProduct,
  getProductStyles,
  getRelatedProducts
};