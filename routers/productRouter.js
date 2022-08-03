const express = require('express');
const productController = require('../controllers/productController');

const productRouter = express.Router();

productRouter.get('/', productController.getAll);
productRouter.post('/', productController.add);
productRouter.get('/search', productController.getByName);
productRouter.get('/:id', productController.getById);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.remove);

module.exports = productRouter;