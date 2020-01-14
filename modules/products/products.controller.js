const express = require('express');
const productsService = require('../products/products.service');
const router = express.Router();

/**
 * Get all products
 * @param req
 * @param res
 * @param next
 * @returns {}
 */

function getAllProducts(req, res, next) {
    console.log(req.body);
    productsService.getAllProducts(req.body)
      .then(products => (products ? res.json({ data: products }) : res.sendStatus(204)))
      .catch(err => next(err));
  };


module.exports = router;

/**
 * GET /api/v1/products
 * Get list of products
 */

router.get('/getProducts', getAllProducts);