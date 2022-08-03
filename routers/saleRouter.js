const express = require('express');
const saleController = require('../controllers/saleController');

const saleRouter = express.Router();

saleRouter.get('/', saleController.getAll);
saleRouter.get('/:id', saleController.getById);
saleRouter.post('/', saleController.add);

module.exports = saleRouter;