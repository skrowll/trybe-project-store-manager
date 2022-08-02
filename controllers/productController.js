const productService = require('../services/productService');

const getAll = async (req, res, next) => {
  try {
    const result = await productService.getAll();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const [result] = await productService.getById(id);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const { name } = req.body;
  try {
    const result = await productService.add(name);
    if (result.error) {
      return res.status(result.error.status).json({ message: result.error.message });
    }
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await productService.update(name, id);
    if (result.error) {
      return res.status(result.error.status).json({ message: result.error.message });
    }
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
};
