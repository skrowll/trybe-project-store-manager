const express = require('express');
const productModel = require('../models/productModel');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/products', productModel.getAll);
router.get('/products/:id', productModel.getById);

module.exports = router;