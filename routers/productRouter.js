const express = require('express');
const productController = require('../controllers/productController');

const productRouter = express.Router();

productRouter.get('/products', productController.getAll);
productRouter.get('/products/:id', productController.getById);

module.exports = productRouter;