const saleModel = require('../models/saleModel');
const validateSale = require('../middlewares/validateSale');

const getAll = async () => {
  const result = await saleModel.getAll();
  if (!result) return [];
  return result;
};

const getById = async (id) => {
  const result = await saleModel.getById(id);
  
  return result;
};

const update = async (sales, id) => {
  const validate = await validateSale(sales);
  const resultById = await saleModel.getById(id);
  if (resultById.length === 0) return { error: { status: 404, message: 'Sale not found' } };
  if (validate.error) {
    return { error: { status: validate.error.status, message: validate.error.message } };
  }
  
  await saleModel.update(id, sales);
  return {
    saleId: id,
    itemsUpdated: sales,
  };
};

const remove = async (id) => {
  const resultById = await saleModel.getById(id);
  if (resultById.length === 0) return { error: { status: 404, message: 'Sale not found' } };

  const result = await saleModel.remove(id);
  return result;
};

module.exports = {
  getAll,
  getById,
  update,
  remove,
};