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

const add = async (name) => {
  if (!name) return { error: { status: 400, message: '"name" is required' } };
  if (name.length < 5) {
    return {
      error: { status: 422, message: '"name" length must be at least 5 characters long' },
    };
  }
  const result = await productModel.add(name);
  return result;
};

const update = async (name, id) => {
  if (!name) return { error: { status: 400, message: '"name" is required' } };
  if (name.length < 5) {
    return {
      error: { status: 422, message: '"name" length must be at least 5 characters long' },
    };
  }
  const result = await productModel.getById(id);
  if (result.length === 0) return { error: { status: 404, message: 'Product not found' } };

  await productModel.update(id, name);
  return {
    id,
    name,
  };
};

module.exports = {
  getAll,
  getById,
  add,
  update,
};
