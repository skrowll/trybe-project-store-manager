const saleModel = require('../models/saleModel');

const getAll = async () => {
  const result = await saleModel.getAll();
  if (!result) return [];
  return result;
};

const getById = async (id) => {
  const result = await saleModel.getById(id);
  
  return result;
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
  remove,
};