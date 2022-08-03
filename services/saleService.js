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

const add = async (sale) => {
  // if (!name) return { error: { status: 400, message: '"name" is required' } };
  // if (name.length < 5) {
  //   return {
  //     error: { status: 422, message: '"name" length must be at least 5 characters long' },
  //   };
  // }
  if (sale.some((element) => !element.productId)) {
    return { error: { status: 400, message: '"productId" is required' } };
  }
  if (sale.some((element) => !element.quantity)) {
    return { error: { status: 400, message: '"quantity" is required' } };
  }
  if (sale.some((element) => element.quantity <= 0)) {
    return { error: { status: 422, message: '"quantity" must be greater than or equal to 1' } };
  }
  const result = await saleModel.add(sale);
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
};