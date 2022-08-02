const productModel = require('../models/productModel');

const getAll = async () => {
  const result = await productModel.getAll();
  if (!result) return [];
  return result;
};

const getById = async (id) => {
  const result = await productModel.getById(id);
  if (!result) return [];
  return result;
};

module.exports = {
  getAll,
  getById,
};
