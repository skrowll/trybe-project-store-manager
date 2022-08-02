const productService = require('../services/productService');

const getAll = async (req, res) => {
  try {
    const result = await productService.getAll();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await productService.getById(id);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

const add = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await productService.add(name);
    if (result.error) {
      return res.status(result.error.status).json({ message: result.error.message });
    }
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await productService.update(name, id);
    if (result.error) {
      return res.status(result.error.status).json({ message: result.error.message });
    }
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await productService.remove(id);
    if (result.error) {
      return res.status(result.error.status).json({ message: result.error.message });
    }
    res.status(204).end();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
};
